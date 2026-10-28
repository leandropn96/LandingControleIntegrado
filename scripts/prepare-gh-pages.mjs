import { copyFileSync, existsSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const browserDir = join('dist', 'LandingControleIntegrado', 'browser');
const indexPath = join(browserDir, 'index.html');

if (!existsSync(indexPath)) {
  console.error(`Build output not found: ${indexPath}`);
  process.exit(1);
}

// SPA fallback: GitHub Pages serves 404.html for unknown paths
copyFileSync(indexPath, join(browserDir, '404.html'));

// Skip Jekyll processing so files with underscores are published
writeFileSync(join(browserDir, '.nojekyll'), '');

console.log('GitHub Pages artifacts ready (404.html, .nojekyll).');
