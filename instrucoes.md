npm create vite@latest
y
coloca o nome do projeto
seleciona o React
seleciona o Javascript
cd nome do projeto
npm install
code .
abre o terminal de novo
npm run dev

=======================
LIMPEZA

apaga o arquivo index.css
limpa tudo de dentro do App.css (deixa vazio)
transforma o App.jsx nisso:
```
function App() {
  return (
    <h1>Aula 1</h1>
  )
}
export default App
```

e no main.jsx apaga apenas a linha 4 que é a importação do index.css que apagamos

dentro da pasta public apaga o aquivo vite.svg
dentro da pasta assets apaga o arquivo react.svg
