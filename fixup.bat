@echo off
echo {> lib/cjs/package.json
echo     "type": "commonjs">> lib/cjs/package.json
echo }>> lib/cjs/package.json

echo {> lib/mjs/package.json
echo     "type": "module">> lib/mjs/package.json
echo }>> lib/mjs/package.json