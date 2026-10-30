import { cpSync } from 'node:fs';

cpSync('projects', 'dist/projects', { recursive: true });
