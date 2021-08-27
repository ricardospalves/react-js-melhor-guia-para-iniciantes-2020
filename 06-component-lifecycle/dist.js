(function () {
  'use strict';

  function Component1(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: "component-1"
    }, /*#__PURE__*/React.createElement(Component2, {
      onIncrement: props.onIncrement
    }));
  }

  function Component2(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: "component-2"
    }, /*#__PURE__*/React.createElement(Component3, {
      onIncrement: props.onIncrement
    }));
  }

  function Component3(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: "component-3"
    }, /*#__PURE__*/React.createElement(Component4, {
      onIncrement: props.onIncrement
    }));
  }

  function Component4(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: "component-4"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: props.onIncrement
    }, "Incrementar"));
  }

  function MainComponent(props) {
    return /*#__PURE__*/React.createElement("div", {
      id: "main"
    }, /*#__PURE__*/React.createElement(Component1, {
      onIncrement: props.onIncrement
    }));
  }

  function AsideComponent(props) {
    return /*#__PURE__*/React.createElement("div", {
      id: "aside"
    }, /*#__PURE__*/React.createElement("h1", null, "Aside"), /*#__PURE__*/React.createElement(AsideChildComponent, {
      counter: props.counter
    }));
  }

  function AsideChildComponent(props) {
    React.useEffect(() => {
      localStorage.setItem('counter', props.counter);
    });
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Contador: ", props.counter));
  }

  function App() {
    const _localCounter = parseInt(localStorage.getItem('counter'), 10);

    const [counter, incrementCounter] = React.useState(_localCounter || 0);

    const increment = () => {
      incrementCounter(counter + 1);
    };

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MainComponent, {
      onIncrement: increment
    }), /*#__PURE__*/React.createElement(AsideComponent, {
      counter: counter
    }));
  }

  ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector('#root'));
})();
