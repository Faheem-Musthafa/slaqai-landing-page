const fs = require('fs');
const path = require('path');

function listDir(p) {
  try {
    return fs.readdirSync(p).slice(0, 200);
  } catch (e) {
    return null;
  }
}

console.log('=== check-next diagnostics ===');
console.log('cwd:', process.cwd());
console.log('node version:', process.version);
console.log('env VERCEL:', process.env.VERCEL);
console.log('env VERCEL_ENV:', process.env.VERCEL_ENV);
console.log('env VERCEL_URL:', process.env.VERCEL_URL);
console.log('env VERCEL_BRANCH_URL:', process.env.VERCEL_BRANCH_URL);
console.log('env NEXT_BUILD_DIR:', process.env.NEXT_BUILD_DIR);
console.log('');

const nextPath = path.join(process.cwd(), '.next');
console.log('.next exists:', fs.existsSync(nextPath));
console.log('.next contents (first 200 entries):');
const entries = listDir(nextPath);
if (entries) console.log(entries.slice(0, 200).join('\n'));
else console.log('  (no .next directory or cannot read)');

const routesManifest = path.join(nextPath, 'routes-manifest.json');
console.log('\n.routes-manifest.json exists:', fs.existsSync(routesManifest));
if (fs.existsSync(routesManifest)) {
  try {
    const data = fs.readFileSync(routesManifest, 'utf8');
    console.log('\nroutes-manifest.json preview:');
    console.log(data.slice(0, 2000));
  } catch (e) {
    console.log('Could not read routes-manifest.json:', e.message);
  }
}

console.log('\nSearch for /vercel/path0 in cwd (first matches):');
function findMatches(dir, matches = [], depth = 0) {
  if (depth > 4) return matches;
  try {
    for (const f of fs.readdirSync(dir)) {
      const full = path.join(dir, f);
      try {
        const stat = fs.statSync(full);
        if (stat.isDirectory()) {
          findMatches(full, matches, depth + 1);
        } else if (stat.isFile() && full.endsWith('.js')) {
          const content = fs.readFileSync(full, 'utf8');
          if (content.includes('/vercel/path0')) matches.push(full);
        }
      } catch (e) {
        // ignore
      }
      if (matches.length >= 20) return matches;
    }
  } catch (e) {
    // ignore
  }
  return matches;
}

const matches = findMatches(process.cwd());
if (matches.length) console.log(matches.join('\n'));
else console.log('  (no matches found)');

console.log('\n=== end diagnostics ===');
