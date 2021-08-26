# Composition API


## Pacotes NPM

Para compilar os arquivos deste exemplo é preciso instalar os seguintes pacotes:

```bash
npm install --save-dev @babel/cli @babel/core @babel/preset-react
```

Para usar o preset-react é necessário criar o arquivo **.babelrc** com o
seguinte conteúdo:

```json
{
  "presets": ["@babel/preset-react"]
}
```

## Compilar os arquivos via terminal

```bash
npx babel caminho/do/arquivo/src.js caminho/de/destino/dist.js
```

No meu caso ficou da seguinte forma

```bash
npx babel 03-passando-dados-de-cima-para-baixo\03-composition\app.js -o 03-passando-dados-de-cima-para-baixo\03-composition\dist.js
```

## Sobre o JSX

O JSX permite escrever código HTML diretamente no JavaScript para criar os
componentes React. Isso torna a escrita e leitura do código muita mais simples.

Logo abaixo um exemplo simples de como usar o JSX no React:

```JSX
function MeuComponenteReact() {
  return (
    <h1 id="heading" className="main-heading">
      Usando o JSX
    </h1>
  )
}
```

O código anterior será compilado para:

```JSX
function MeuComponenteReact() {
  return React.createElement("h1", {
    id: "heading",
    className: "main-heading"
  }, "Usando o JSX");
}
```

Também é possível usar expressões JavaScript diretamente no HTML.

```JSX
function Paragraph() {
  const name = 'Lorem Ipsum'
  const age = '99'

  return (
    <p id="heading" className="main-heading">
      Meu nome é {name} e tenho {age} anos
    </p>
  )
}
```

O código anterior será compilado para:

```JSX
function Paragraph() {
  const name = 'Lorem Ipsum';
  const age = '99';
  return React.createElement("p", {
    id: "heading",
    className: "main-heading"
  }, "Meu nome é ", name, " e tenho ", age, " anos");
}
```
