(function() {
  'use strict'

  /**
   * É possível fazer o aninhamento de componente no React usando o método
   * createElement. Do terceiro parâmetro em diante desse método, são aceitos
   * componentes ou fragmentos React, ou uma string com o nome da tag.
   */

  /**
   * No exemplo abaixo, o primeiro método createElement() está criando um
   * cointainer com a tag div. O segundo createElement() está criando um filho
   * para o container, que é o Component2, e esse Componente2 é uma função que
   * retorna um componente React. Com isso nós acabamos de criar o primeiro
   * nível do aninhamento.
   *
   * @returns {Object} React component
   */
  function Component1() {
    return (
      // A div é pai do Component2
      React.createElement('div', { className: 'component-1' },
        React.createElement(Component2)
      )
    )
  }

  /**
   * O Component2 é o container do Component3.
   *
   * @returns {Object} React component
   */
  function Component2() {
    return (
      // A div é pai do Component3
      React.createElement('div', { className: 'component-2' },
        React.createElement(Component3)
      )
    )
  }

  /**
   * O Component3 é o container do Component4
   *
   * @returns {Object} React component
   */
  function Component3() {
    return (
      // A div é pai do Component4
      React.createElement('div', { className: 'component-3' },
        React.createElement(Component4)
      )
    )
  }

  /**
   * O Component4 está criando um elemento <p>
   *
   * @returns {Object} React component
   */
  function Component4() {
    return (
      // A div é pai do elemento <p>
      React.createElement(`div`, { className: 'component-4' },
        React.createElement('p', { className: 'paragraph' }, 'Component 4'))
      )
  }

  /**
   * Componente principal que irá conter todos os outros componentes.
   *
   * @returns {Object} React component
   */
  function MainComponent() {
    return React.createElement('div', { id: 'main' },
      React.createElement(Component1))
  }

  ReactDOM.render(
    React.createElement(MainComponent),
    window.root
  )
})()
