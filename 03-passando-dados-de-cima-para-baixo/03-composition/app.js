(function() {
  'use strict'

  /**
   * Com o Composition é possível definir quem é o filho, o neto, o bisneto e
   * assim por diante no mesmo escopo. Isso facilita, por exemplo, a propagação
   * de informação do componente vô para o componente neto sem precisar
   * passar pelo componente pai, ou do vô para o bisneto e assim por diante.
   */

  function Component1() {
    // Esse será o dado que queremos propegar do Component1 para o Component4
    const myName = 'Composition!!!'

    return (
      /**
       * Aqui é possível notar que estamos fazendo um encadeamento de
       * componentes de uma só vez no Component1. O Component1 chama o
       * Component2 que, por sua vez, chama o Component4 e propaga a informação
       * do Component1 direto para o Component4 sem precisar passar pelo
       * Component2.
       *
       * Então no meu caso eu estou propagando o dado myName do Component1
       * direto pro Component4 através do atributo name no Component4.
       */
      <div className="component-1">
        <Component2>
          <Component4 name={myName}/>
        </Component2>
      </div>
    )
  }

  function Component2(props) {
    /**
     * O parâmetro props possui a propriedade .children, e ela contém os
     * componentes React que foram encadeados. Com essa propriedade e possível
     * recuperar o componente que foi passado por Composition e reutilizá-lo.
     */
    const { children } = props

    return (
      /**
       * Aqui é possível notar que a estrutura do Component2 é mais complexa.
       * Ela possui uma <div> e essa <div> possui um <header> e um <footer>,
       * onde o <footer> contém um texto e o <header> irá receber dinamicamente
       * um componente através do props.children. No meu caso, quem está
       * passando esse componente via props é o Component1.
       */
      <div className="component-2">
        <header>
          {props.children}
        </header>

        <footer>Footer</footer>
      </div>
    )
  }

  /**
   * Neste exemplo o Component3 est[a sendo ignorado, porque ninguém está
   * utilizado ele.
   */
  function Component3() {
    return (
      <div className="component-3">
        <Component4 />
      </div>
    )
  }

  function Component4(props) {
    return (
      /**
       * Aqui o Component4 está recebendo o dado name via props.
       */
      <div className="component-4">
        <p className="paragraph">
          Componente 4 {props.name}
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
