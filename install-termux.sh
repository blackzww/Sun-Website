#!/data/data/com.termux/files/usr/bin/bash
set -euo pipefail

printf '\nSun Website — instalação\n\n'

if ! command -v node >/dev/null 2>&1; then
  echo 'Node.js não foi encontrado.'
  echo 'Instale Node.js 20.9+ no Termux e rode este script novamente.'
  exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
  echo 'npm não foi encontrado.'
  exit 1
fi

node - <<'NODE'
const [major, minor] = process.versions.node.split('.').map(Number)
if (major < 20 || (major === 20 && minor < 9)) {
  console.error(`Node ${process.versions.node} detectado. O projeto precisa de Node 20.9+.`)
  process.exit(1)
}
console.log(`Node ${process.versions.node} OK`)
NODE

npm install
npm run typecheck

echo
echo 'Instalação concluída.'
echo 'Use: npm run dev'
echo 'Abra: http://localhost:3000'
