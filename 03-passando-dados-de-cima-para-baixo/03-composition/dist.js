(function () {
  'use strict';
  /**
   * Com o Composition é possível definir quem é o filho, o neto, o bisneto e
   * assim por diante no mesmo escopo. Isso facilita, por exemplo, a propagação
   * de informação do componente vô para o componente neto sem precisar
   * passar pelo componente pai, ou do vô para o bisneto e assim por diante.
   */

  function Component1() {
    // Esse será o dado que queremos propegar do Component1 para o Component4
    const myName = 'Composition!!!';
    return (
      /*#__PURE__*/

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
      React.createElement("div", {
        className: "component-1"
      }, /*#__PURE__*/React.createElement(Component2, null, /*#__PURE__*/React.createElement(Component4, {
        name: myName
      })))
    );
  }

  function Component2(props) {
    /**
     * O parâmetro props possui a propriedade .children, e ela contém os
     * componentes React que foram encadeados. Com essa propriedade e possível
     * recuperar o componente que foi passado por Composition e reutilizá-lo.
     */
    const {
      children
    } = props;
    return (
      /*#__PURE__*/

      /**
       * Aqui é possível notar que a estrutura do Component2 é mais complexa.
       * Ela possui uma <div> e essa <div> possui um <header> e um <footer>,
       * onde o <footer> contém um texto e o <header> irá receber dinamicamente
       * um componente através do props.children. No meu caso, quem está
       * passando esse componente via props é o Component1.
       */
      React.createElement("div", {
        className: "component-2"
      }, /*#__PURE__*/React.createElement("header", null, props.children), /*#__PURE__*/React.createElement("footer", null, "Footer"))
    );
  }
  /**
   * Neste exemplo o Component3 est[a sendo ignorado, porque ninguém está
   * utilizado ele.
   */


  function Component3() {
    return /*#__PURE__*/React.createElement("div", {
      className: "component-3"
    }, /*#__PURE__*/React.createElement(Component4, null));
  }

  function Component4(props) {
    return (
      /*#__PURE__*/

      /**
       * Aqui o Component4 está recebendo o dado name via props.
       */
      React.createElement("div", {
        className: "component-4"
      }, /*#__PURE__*/React.createElement("p", {
        className: "paragraph"
      }, "Componente 4 ", props.name))
    );
  }

  function MainComponent() {
    return /*#__PURE__*/React.createElement("div", {
      id: "main"
    }, /*#__PURE__*/React.createElement(Component1, null));
  }

  ReactDOM.render( /*#__PURE__*/React.createElement(MainComponent, null), document.querySelector('#root'));
})();
