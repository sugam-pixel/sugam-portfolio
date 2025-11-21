import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Play, RefreshCw, Check, AlertTriangle } from "lucide-react";

// --- Sprint Planning Game ---
function SprintGame() {
  const [capacity] = useState(20);
  const [sprintLoad, setSprintLoad] = useState(0);
  const [backlog, setBacklog] = useState([
    { id: 1, title: "Auth Service", points: 5, selected: false },
    { id: 2, title: "User Dashboard", points: 8, selected: false },
    { id: 3, title: "API Integration", points: 5, selected: false },
    { id: 4, title: "Bug Fixes", points: 3, selected: false },
    { id: 5, title: "Documentation", points: 2, selected: false },
    { id: 6, title: "Unit Tests", points: 5, selected: false },
  ]);

  const toggleTask = (id: number) => {
    const task = backlog.find(t => t.id === id);
    if (!task) return;

    if (!task.selected && sprintLoad + task.points > capacity) {
      toast({
        title: "Sprint Overloaded!",
        description: "This task exceeds the team's capacity.",
        variant: "destructive",
      });
      return;
    }

    setBacklog(prev => prev.map(t => 
      t.id === id ? { ...t, selected: !t.selected } : t
    ));
    
    setSprintLoad(prev => task.selected ? prev - task.points : prev + task.points);
  };

  const startSprint = () => {
    if (sprintLoad < 15) {
      toast({ title: "Under Capacity", description: "You can take on more work!" });
    } else {
      toast({ title: "Sprint Started!", description: "Good luck with the deliverables.", className: "bg-green-500 text-white" });
    }
  };

  return (
    <div className="p-4 space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-1">Team Capacity: {capacity} SP</h4>
          <div className="w-64 h-3 bg-muted rounded-full overflow-hidden">
            <motion.div 
              className={`h-full ${sprintLoad > capacity ? "bg-red-500" : "bg-primary"}`}
              initial={{ width: 0 }}
              animate={{ width: `${(sprintLoad / capacity) * 100}%` }}
            />
          </div>
        </div>
        <Button onClick={startSprint} disabled={sprintLoad === 0}>Start Sprint</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <h5 className="text-xs font-bold uppercase text-muted-foreground">Product Backlog</h5>
          {backlog.filter(t => !t.selected).map(task => (
            <motion.div 
              layoutId={`task-${task.id}`}
              key={task.id} 
              onClick={() => toggleTask(task.id)}
              className="p-3 bg-card border rounded-lg cursor-pointer hover:border-primary/50 flex justify-between items-center"
            >
              <span className="text-sm font-medium">{task.title}</span>
              <span className="text-xs bg-muted px-2 py-1 rounded">{task.points} pts</span>
            </motion.div>
          ))}
        </div>
        
        <div className="space-y-2">
          <h5 className="text-xs font-bold uppercase text-muted-foreground">Sprint Backlog</h5>
          <div className="min-h-[200px] bg-muted/20 rounded-lg p-2 space-y-2 border-2 border-dashed border-muted">
            {backlog.filter(t => t.selected).map(task => (
              <motion.div 
                layoutId={`task-${task.id}`}
                key={task.id} 
                onClick={() => toggleTask(task.id)}
                className="p-3 bg-background border shadow-sm rounded-lg cursor-pointer flex justify-between items-center"
              >
                <span className="text-sm font-medium">{task.title}</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{task.points} pts</span>
              </motion.div>
            ))}
            {backlog.filter(t => t.selected).length === 0 && (
              <div className="h-full flex items-center justify-center text-muted-foreground text-sm italic py-8">
                Select tasks to add to sprint
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Risk & Velocity ---
function RiskVelocity() {
  const [velocity, setVelocity] = useState(30);
  const [scope, setScope] = useState(100);
  const sprintsNeeded = Math.ceil(scope / velocity);
  
  return (
    <div className="p-4 space-y-8">
      <div className="space-y-4">
        <div className="flex justify-between">
          <Label>Team Velocity (pts/sprint)</Label>
          <span className="font-mono font-bold">{velocity}</span>
        </div>
        <Slider value={[velocity]} min={10} max={50} step={1} onValueChange={(v) => setVelocity(v[0])} />
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-between">
          <Label>Project Scope (points)</Label>
          <span className="font-mono font-bold">{scope}</span>
        </div>
        <Slider value={[scope]} min={50} max={200} step={5} onValueChange={(v) => setScope(v[0])} />
      </div>

      <div className="bg-muted/30 p-4 rounded-lg border text-center">
        <div className="text-sm text-muted-foreground mb-1">Estimated Delivery</div>
        <div className="text-3xl font-bold text-primary">{sprintsNeeded} Sprints</div>
        <div className="text-xs text-muted-foreground mt-2">
          {sprintsNeeded > 5 ? "⚠️ High Risk Timeline" : "✅ Manageable Timeline"}
        </div>
      </div>
    </div>
  );
}

// --- RACI Explainer ---
function RACIGame() {
  const roles = ["PM", "Dev", "Designer", "Stakeholder"];
  const tasks = ["Define Specs", "Write Code", "User Testing", "Sign-off"];
  const [grid, setGrid] = useState<Record<string, string>>({});

  const codes = ["R", "A", "C", "I", ""];
  
  const toggleCell = (r: string, t: string) => {
    const key = `${r}-${t}`;
    const current = grid[key] || "";
    const nextIndex = (codes.indexOf(current) + 1) % codes.length;
    setGrid({ ...grid, [key]: codes[nextIndex] });
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-5 gap-2 mb-4">
        <div className="font-bold text-xs uppercase text-muted-foreground">Task \ Role</div>
        {roles.map(r => <div key={r} className="font-bold text-xs uppercase text-center">{r}</div>)}
        
        {tasks.map(t => (
          <>
            <div key={t} className="text-sm font-medium flex items-center">{t}</div>
            {roles.map(r => {
              const val = grid[`${r}-${t}`];
              return (
                <div 
                  key={`${r}-${t}`} 
                  onClick={() => toggleCell(r, t)}
                  className={`
                    h-10 rounded border flex items-center justify-center cursor-pointer font-bold transition-colors
                    ${val === 'R' ? 'bg-red-100 text-red-700 dark:bg-red-900/20' : ''}
                    ${val === 'A' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20' : ''}
                    ${val === 'C' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/20' : ''}
                    ${val === 'I' ? 'bg-green-100 text-green-700 dark:bg-green-900/20' : ''}
                    ${!val ? 'hover:bg-muted' : ''}
                  `}
                >
                  {val}
                </div>
              );
            })}
          </>
        ))}
      </div>
      <div className="flex gap-4 text-xs text-muted-foreground justify-center">
        <span>Click cells to cycle: Responsible, Accountable, Consulted, Informed</span>
      </div>
    </div>
  );
}

export default function Playground() {
  return (
    <section id="playground" className="py-24 container mx-auto px-4">
      <div className="mb-12">
        <motion.h2 
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          PM Playground
        </motion.h2>
        <p className="text-muted-foreground">Interactive tools to demonstrate program mechanics.</p>
      </div>

      <Tabs defaultValue="sprint" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="sprint">Sprint Planner</TabsTrigger>
          <TabsTrigger value="risk">Risk & Velocity</TabsTrigger>
          <TabsTrigger value="raci">RACI Matrix</TabsTrigger>
        </TabsList>
        
        <TabsContent value="sprint">
          <Card>
            <CardHeader>
              <CardTitle>Sprint Capacity Game</CardTitle>
            </CardHeader>
            <CardContent>
              <SprintGame />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="risk">
          <Card>
            <CardHeader>
              <CardTitle>Velocity Calculator</CardTitle>
            </CardHeader>
            <CardContent>
              <RiskVelocity />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="raci">
          <Card>
            <CardHeader>
              <CardTitle>Interactive RACI</CardTitle>
            </CardHeader>
            <CardContent>
              <RACIGame />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
}
