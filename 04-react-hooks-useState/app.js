(function () {
  'use strict'

  /**
   * O estado do componente é a reatividade do React, é basicamente onde a
   * interface deve refletir as informações que são alteradas. Então se um
   * componente está exibindo o valor da variável idade no header do site,
   * quando essa variável mudar de valor, esse valor deve ser refletido no
   * header automaticamente.
   *
   * O estado do componente não é igual as props. As props são informações
   * vindas de terceiros, enquanto o estado do componente sã as informações do
   * próprio componente.
   */

  function Component1() {
    return (
      <div className="component-1">
        <Component2 />
      </div>
    )
  }

  function Component2() {
    return (
      <div className="component-2">
        <Component3 />
      </div>
    )
  }

  function Component3() {
    /**
     * Para usar a reatividade em React, existe o método useState, que é um Hook
     * do React. Esse método recebe o valor do estado do componente e retorna um
     * array.
     *
     * Esse array retornado do método useState possui 2 itens. O primeiro é uma
     * variável que possui o valor passado como parâmetro para o useState, ela é
     * o estado do componente. O segundo é uma função responsável por atualizar
     * o valor desse estado.
     *
     * O exemplo abaixo é um destructuring para array.
     */
    const [age, setAge] = React.useState(99999)

    /**
     * Aqui estou utilizando o setTimeout para visualizar na interface como
     * funciona a reatividade na prática. Inicialmente o componente terá o
     * estado age com o valor de 99. Depois de 2 segundos, a função setAge vai
     * atualizar o estado do age para 21 e esse novo valor será refletido na
     * interface.
     */
    setTimeout(() => {
      setAge(0)
    }, 2000)

    return (
      /**
       * É possível passar o estado do componete para outros componentes através
       * das props. No exemplo abaixo estou passando o estado age para o
       * Component4.
       */
      <div className="component-3">
        <Component4 age={age} />
      </div>
    )
  }

  /**
   * O Component4 está recebendo via props o estado do Component3.
   */
  function Component4(props) {
    /**
     * Aqui estamos criando o estado name do Componet4.
     */
    const [name, setName] = React.useState('Lorem')

    /**
     * Depois de 1 segundo o estado name é atualizado.
     */
    setTimeout(() => {
      setName('Ipsum')
    }, 1000)

    return (
      /**
       * No exemplo abaixo estou adicionando na interface o estado do Component3
       * e Component4. Então sempre que esses estados forem modificados, eles
       * serão refletidos na interface.
       */
      <div className="component-4">
        <p className="paragraph">
          Meu nome é {name} e tenho {props.age} anos
        </p>
      </div>
    )
  }

  function MainComponent() {
    return (
      <div id="main">
        <Component1 />
      </div>
    )
  }

  ReactDOM.render(
    <MainComponent />,
    document.querySelector('#root')
  )
})()
