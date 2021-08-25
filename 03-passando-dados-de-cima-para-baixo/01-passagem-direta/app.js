(function() {
  'use strict'

  function Component1() {
    /**
     * A constante myName será enviada pelo Component1 e irá percorrer por todos
     * os componentes até chegar no seu destino, que é o Component4.
     */
    const myName = 'Lorem Ipsum'

    return (
      React.createElement('div', { className: 'component-1' },
        // O dado que é enviado entre os componentes deve ser um objeto e será
        // passado como argumento do segundo parâmetro do método createElement.
        // No caso abaixo, a constante myName está sendo enviada para o
        // Component2.
        React.createElement(Component2, { myName })
      )
    )
  }

  /**
   * Por convenção, o segundo parâmetro do método createElement é chamado de
   * props, mas poderia ter qualquer outro nome.
   *
   * @param {Object} props
   */
  function Component2(props) {
    return (
      // A div é pai do Component3
      React.createElement('div', { className: 'component-2' },
        // Aqui o Component2 recebe o props do Component1 e o reenvia para o
        // Component3
        React.createElement(Component3, props)
      )
    )
  }

  function Component3(props) {
    return (
      React.createElement('div', { className: 'component-3' },
        // Aqui o Component3 recebe o props do Component2 e o reenvia para o
        // Component4
        React.createElement(Component4, props)
      )
    )
  }

  function Component4(props) {
    // Aqui o Component4 recebe o props do Component3 e exibe seu
    // valor no elemento.
    const { myName } = props

    return (
      React.createElement(`div`, { className: 'component-4' },
        // Exibindo o valor recibido via props no elemento
        React.createElement('p', { className: 'paragraph' }, myName))
      )
  }

  function MainComponent() {
    return React.createElement('div', { id: 'main' },
      React.createElement(Component1))
  }

  ReactDOM.render(
    React.createElement(MainComponent),
    window.root
  )
})()
