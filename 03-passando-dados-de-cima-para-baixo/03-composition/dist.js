(function () {
  'use strict';
  /**
   * Este arquivo está utilizando a sintaxe do JSX para criar os componentes.
   * A sintaxe JSX nos permite escrever código HTML diretamente no JavaScript.
   * Também é possível usar expressões JS dentro do HTML, por exemplo
   */

  const ContextName = React.createContext('name');

  function Component1() {
    const myName = 'JSX!';
    return /*#__PURE__*/React.createElement(ContextName.Provider, {
      value: myName
    }, /*#__PURE__*/React.createElement("div", {
      className: "component-1"
    }, /*#__PURE__*/React.createElement(Component2, null)));
  }

  function Component2() {
    return /*#__PURE__*/React.createElement("div", {
      className: "component-2"
    }, /*#__PURE__*/React.createElement(Component3, null));
  }

  function Component3() {
    return /*#__PURE__*/React.createElement("div", {
      className: "component-3"
    }, /*#__PURE__*/React.createElement(Component4, null));
  }

  function Component4() {
    return /*#__PURE__*/React.createElement(ContextName.Consumer, null, name => /*#__PURE__*/React.createElement("div", {
      className: "component-4"
    }, /*#__PURE__*/React.createElement("p", {
      className: "paragraph"
    }, name)));
  }

  function MainComponent() {
    return /*#__PURE__*/React.createElement("div", {
      id: "main"
    }, /*#__PURE__*/React.createElement(Component1, null));
  }

  ReactDOM.render( /*#__PURE__*/React.createElement(MainComponent, null), window.root);
})();
