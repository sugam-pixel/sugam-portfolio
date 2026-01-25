#!/usr/bin/env node
import { execSync } from 'child_process';

console.log('Building frontend...');
execSync('vite build', { stdio: 'inherit' });

console.log('Building server (CommonJS)...');
execSync('esbuild server/index-prod.ts --platform=node --packages=external --bundle --format=cjs --outfile=dist/index.cjs', { stdio: 'inherit' });

console.log('Build complete!');
