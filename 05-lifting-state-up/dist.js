(function () {
  'use strict';
  /**
   * O Lifting State Up é uma técnica onde o estado da aplicação é definida no
   * elemento de mais alto nível e comum a todos que irão precisar acessar esse
   * estado. Com essa técnica é possível é possível propagar a informação para
   * componentes mais internos, externos e até mesmo componentes adjacentes,
   * desde que todos estejam dentro do componente que cria os estados.
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
      /*#__PURE__*/

      /**
       * O Component1 recebe a função que incrementa o contador via props e a
       * repassa para o Component2.
       */
      React.createElement("div", {
        className: "component-1"
      }, /*#__PURE__*/React.createElement(Component2, {
        onIncrement: props.onIncrement
      }))
    );
  }

  function Component2(props) {
    return (
      /*#__PURE__*/

      /**
       * O Component2 recebe a função que incrementa o contador via props e a
       * repassa para o Component3.
       */
      React.createElement("div", {
        className: "component-2"
      }, /*#__PURE__*/React.createElement(Component3, {
        onIncrement: props.onIncrement
      }))
    );
  }

  function Component3(props) {
    return (
      /*#__PURE__*/

      /**
       * O Component3 recebe a função que incrementa o contador via props e a
       * repassa para o Component4.
       */
      React.createElement("div", {
        className: "component-3"
      }, /*#__PURE__*/React.createElement(Component4, {
        onIncrement: props.onIncrement
      }))
    );
  }

  function Component4(props) {
    return (
      /*#__PURE__*/

      /**
       * O Component4 recebe a função que incrementa o contador via props e a
       * adiciona no botão que, ao ser clicado, invoca a função recebida.
       */
      React.createElement("div", {
        className: "component-4"
      }, /*#__PURE__*/React.createElement("button", {
        type: "button",
        onClick: props.onIncrement
      }, "Incrementar"))
    );
  }

  function MainComponent(props) {
    return (
      /*#__PURE__*/

      /**
       * O MainComponent recebe a função que incrementa o contador via props e a
       * repassa para o Component1.
       */
      React.createElement("div", {
        id: "main"
      }, /*#__PURE__*/React.createElement(Component1, {
        onIncrement: props.onIncrement
      }))
    );
  }

  function AsideComponent(props) {
    return (
      /*#__PURE__*/

      /**
       * O AsideComponent recebe o contador via props e o repassa para o
       * AsideChildComponent.
       */
      React.createElement("div", {
        id: "aside"
      }, /*#__PURE__*/React.createElement("h1", null, "Aside"), /*#__PURE__*/React.createElement(AsideChildComponent, {
        counter: props.counter
      }))
    );
  }

  function AsideChildComponent(props) {
    return (
      /*#__PURE__*/

      /**
       * O AsideChildComponent recebe o contador via props e o exibe.
       */
      React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Contador: ", props.counter))
    );
  }
  /**
   * O Componente App engloba todos os outros componentes e é nele que iremos
   * definir os nossos estados.
   */


  function App() {
    // Aqui é criado um contador zerado e a função que atualiza esse contador
    const [counter, incrementCounter] = React.useState(0);
    /**
     * A função abaixo irá atualizar o contador sempre que a função increment
     * for invocada.
     */

    const increment = () => {
      /**
       * Os estados em React são imutáveis, portanto tentar fazer algo do tipo
       * "++counter", "counter++" ou "counter += 1" irá lançar um erro.
       */
      incrementCounter(counter + 1);
    };

    return (
      /*#__PURE__*/

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
      React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MainComponent, {
        onIncrement: increment
      }), /*#__PURE__*/React.createElement(AsideComponent, {
        counter: counter
      }))
    );
  }

  ReactDOM.render( /*#__PURE__*/React.createElement(App, null), window.root);
})();
