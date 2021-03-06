(function () {
  'use strict'

  /**
   * O Lifting State Up é uma técnica onde o estado da aplicação é definida no
   * elemento de mais alto nível e comum a todos que irão precisar acessar esse
   * estado. Com essa técnica, o componente de mais alto nível e que possui os
   * estados da aplicação consegue propagar o estado para todos os seus filhos,
   * netos, bisnetos e assim por diante.
   *
   * No meu caso eu quero que, quando um botão do Component4 seja clicado, o
   * texto exibido no AsideChildComponent seja atualizado.
   *
   * Esse exemplo irá propagar a informação de componente para componente,
   * apenas para fins didáticos, em situações normais a melhor escolha seria
   * usar uma biblioteca de gerenciamento de estado, como o Redux.
   */

  function Component1(props) {
    return (
      /**
       * O Component1 recebe a função que incrementa o contador via props e a
       * repassa para o Component2.
       */
      <div className="component-1">
        <Component2 onIncrement={props.onIncrement} />
      </div>
    )
  }

  function Component2(props) {
    return (
      /**
       * O Component2 recebe a função que incrementa o contador via props e a
       * repassa para o Component3.
       */
      <div className="component-2">
        <Component3 onIncrement={props.onIncrement} />
      </div>
    )
  }

  function Component3(props) {
    return (
      /**
       * O Component3 recebe a função que incrementa o contador via props e a
       * repassa para o Component4.
       */
      <div className="component-3">
        <Component4 onIncrement={props.onIncrement} />
      </div>
    )
  }

  function Component4(props) {
    return (
      /**
       * O Component4 recebe a função que incrementa o contador via props e a
       * adiciona no botão que, ao ser clicado, invoca a função recebida.
       */
      <div className="component-4">
        <button type="button" onClick={props.onIncrement}>Incrementar</button>
      </div>
    )
  }

  function MainComponent(props) {
    return (
      /**
       * O MainComponent recebe a função que incrementa o contador via props e a
       * repassa para o Component1.
       */
      <div id="main">
        <Component1 onIncrement={props.onIncrement}/>
      </div>
    )
  }

  function AsideComponent(props) {
    return (
      /**
       * O AsideComponent recebe o contador via props e o repassa para o
       * AsideChildComponent.
       */
      <div id="aside">
        <h1>Aside</h1>

        <AsideChildComponent counter={props.counter}/>
      </div>
    )
  }

  function AsideChildComponent(props) {
    return (
      /**
       * O AsideChildComponent recebe o contador via props e o exibe.
       */
      <div>
        <h2>Contador: { props.counter }</h2>
      </div>
    )
  }

  /**
   * O Componente App engloba todos os outros componentes e é nele que iremos
   * definir os nossos estados.
   */
  function App() {
    // Aqui é criado um contador zerado e a função que atualiza esse contador
    const [counter, incrementCounter] = React.useState(0)

    /**
     * A função abaixo irá atualizar o contador sempre que a função increment
     * for invocada.
     */
    const increment = () => {
      /**
       * Os estados em React são imutáveis, portanto tentar fazer algo do tipo
       * "++counter", "counter++" ou "counter += 1" irá lançar um erro.
       */
      incrementCounter(counter + 1)
    }

    return (
      /**
       * O componente React só deve retornar um único componente, para retornar
       * mais de um é preciso englobar os demais em um único elemento. O React
       * provê o componente Fragment que consegue englobar todos os componentes
       * porém sem adicionar nenhum elemento na marcação. Ou seja, por mais que
       * o MainComponent e o AsideComponent sejam filhos do React.Fragment, no
       * HTML renderizados eles estarão sem nenhum container. Isso é excelente
       * pois não afeta no markup final, assim não afetando estilos CSS, por
       * exemplo.
       */
      <React.Fragment>
        {
          /**
           * Aqui é propagada a função que irá incrementar o contador através
           * do props.
           */
        }
        <MainComponent onIncrement={increment}/>

        {
          /**
           * Aqui é propagado o contador através do props.
           */
        }
        <AsideComponent counter={counter}/>
      </React.Fragment>
    )
  }

  ReactDOM.render(
    <App />,
    document.querySelector('#root')
  )
})()
