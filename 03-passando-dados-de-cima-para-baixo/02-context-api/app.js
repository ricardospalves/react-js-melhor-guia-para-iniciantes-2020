(function() {
  'use strict'

  /**
   * A propagação de informação através da Context API permite que um componente
   * React em mais alto nível consiga passar informações para um de mais baixo
   * nível sem precisar passar por todos os componentes. O componente que irá
   * propagar a informação é chamado de Provider, que é quem provê a informação
   * e o componente que recebe essa informação é chamado de Consumer, que é quem
   * consome essa informação. Lembrando que, obrigatóriamente, o componente que
   * irá receber a informação precisa estar dentro do que irá disparar, mas não
   * precisa ser o filho direto necessariamente, ele pode ser neto,
   * bisneto e etc.
   */

  /**
   * O método createContext recebe como parâmetro o nome da informação que será
   * propagada, no meu caso o nome é name, e retorna um componente React.
   */
  const ContextName = React.createContext('name')

  /**
   * O Component1, é o Provider, é quem provê a informação que será propagada.
   */
  function Component1() {
    const myName = 'Context API!'

    return (
      /**
       * O método createContext retorna um componente React, assim como o
       * createElement, e essa é a sacada. Como a informação é passada do pai
       * pro filho, então o que acontece por baixo dos panos é que o componente
       * criado pela Context API vai passar a informação pro componente logo
       * abaixo dele, e é por isso que o componente que irá receber a informação
       * precisa ser filho do componente criado pela Context API.
       *
       * Para que o React saiba quem está provendo a informação, é preciso usar
       * a propriedade Provider, e o segundo parâmetro é obrigatório que seja
       * passado um objeto com a propriedade value, e é nessa propriedade que
       * nós iremos passar o dado que queremos propagar. O nome dessa
       * propriedade não pode ser outra, senão value.
       */
      React.createElement(ContextName.Provider, { value: myName },
        React.createElement('div', { className: 'component-1' },
          React.createElement(Component2)
        )
      )
    )
  }

  function Component2() {
    return (
      React.createElement('div', { className: 'component-2' },
        React.createElement(Component3)
      )
    )
  }

  function Component3() {
    return (
      React.createElement('div', { className: 'component-3' },
        React.createElement(Component4)
      )
    )
  }

  /**
   * O Component4, é o Consumer, é quem consome a informação propagada.
   */
  function Component4() {
    return (
      // Aqui nós informamos que o elemento do Component4 é quem irá consumir a
      // informação propagada.
      React.createElement(ContextName.Consumer, null,
        // A partir do terceiro parâmetro, é preciso que seja passado uma função
        // como argumento, e essa função é quem captura a informação propagada
        // através do seu parâmetro. O parâmetro dessa função precisa ser o nome
        // da informação que se quer capturar, no meu caso o nome é name. Que é
        // o nome que foi definido na criação do React.createContext.
        name => (
          React.createElement(`div`, { className: 'component-4' },
            // E finamente aqui eu consigo pegar o valor da informação que foi
            // propagada.
            React.createElement('p', { className: 'paragraph' }, name))
        )
      )
    )
  }

  function MainComponent() {
    return React.createElement('div', { id: 'main' },
      React.createElement(Component1))
  }

  ReactDOM.render(
    React.createElement(MainComponent),
    document.querySelector('#root')
  )
})()
