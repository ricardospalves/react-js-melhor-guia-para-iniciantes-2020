(function() {
  'use strict'

  /**
   * O método abaixo irá criar e retornar um componente React simples.
   *
   * @returns {Object} objeto que o React entende como sendo um componente
   */
  function MyComponent() {
    /**
     * O método React.createElement(type [, props] [, ...children]) cria um
     * componente React e recebe 3 parâmetros.
     *
     * type: O primeiro parâmetro é obrigatório e deve ser uma string com o nome
     * da tag do elemento (ex.: 'div'), um componente ou fragmento React.
     *
     * props: O segundo parâmetro é opcional e deve ser um objeto. Esse objeto
     * deverá ter os atributos da tag como id, className, title e etc. Caso o
     * componente não precise de atributo, o valor null pode ser passado.
     *
     * children: A partir do terceiro parâmetro são os filhos do componente, e
     * eles devem ser uma string com o nome da tag, um componente ou fragmento
     * React. Eles são opcionais.
     */
    const type = 'h1'
    const props = {
      id: 'heading',
      // IMPORTANT: para evitar conflitos com a palavra reservada class do
      // JavaScript, para adicionar o atributo class do HTML, é necessário
      // passar a chave como className.
      className: 'heading'
    }
    const child = 'Hello World!'

    return React.createElement(
      type,
      props,
      child
    )
  }

  /**
   * Todo componente criado no React precisa ser injetado na página dinamicamente,
   * e o responsável por isso é o método ReactDOM.render(). Esse método recebe 2
   * parâmetros, onde o primeiro é o componente React que será injetado na página
   * e o segundo é o container onde o elemento será injetado.
   *
   * Mais informações: https://pt-br.reactjs.org/docs/react-dom.html
   */
  ReactDOM.render(
    // O primeiro parâmetro precisa ser um componente React, para isso é preciso
    // criar esse componente através do método React.createElement()
    React.createElement(MyComponent),
    // O segundo parâmetro precisa ser um Node
    document.querySelector('#root')
  )
})()
