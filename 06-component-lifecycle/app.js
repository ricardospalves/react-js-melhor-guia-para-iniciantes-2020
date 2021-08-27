(function () {
  'use strict'

  function Component1(props) {
    return (
      <div className="component-1">
        <Component2 onIncrement={props.onIncrement} />
      </div>
    )
  }

  function Component2(props) {
    return (
      <div className="component-2">
        <Component3 onIncrement={props.onIncrement} />
      </div>
    )
  }

  function Component3(props) {
    return (
      <div className="component-3">
        <Component4 onIncrement={props.onIncrement} />
      </div>
    )
  }

  function Component4(props) {
    return (
      <div className="component-4">
        <button type="button" onClick={props.onIncrement}>Incrementar</button>
      </div>
    )
  }

  function MainComponent(props) {
    return (
      <div id="main">
        <Component1 onIncrement={props.onIncrement} />
      </div>
    )
  }

  function AsideComponent(props) {
    return (
      <div id="aside">
        <h1>Aside</h1>

        <AsideChildComponent counter={props.counter} />
      </div>
    )
  }

  function AsideChildComponent(props) {
    React.useEffect(() => {
      localStorage.setItem('counter', props.counter)
    })

    return (
      <div>
        <h2>Contador: {props.counter}</h2>
      </div>
    )
  }

  function App() {
    const _localCounter = parseInt(localStorage.getItem('counter'), 10)
    const [counter, incrementCounter] = React.useState(_localCounter || 0)

    const increment = () => {
      incrementCounter(counter + 1)
    }

    return (
      <React.Fragment>
        <MainComponent onIncrement={increment} />
        <AsideComponent counter={counter} />
      </React.Fragment>
    )
  }

  ReactDOM.render(
    <App />,
    window.root
  )
})()
