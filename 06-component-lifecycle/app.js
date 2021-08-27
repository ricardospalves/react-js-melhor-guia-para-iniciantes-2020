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
    /**
     * O hook useEffect é disparado toda vez que o componente sofre uma
     * modificação.
     *
     * No meu caso, sempre que o botão de incrementar o contador é clicado, ele
     * modifica o estado do counter, esse counter é recebido pelo
     * AsideChildComponent via props, portanto, sempre que o estado counter é
     * alterado, o componente AsideChildComponent é atualizado. E é aí que o
     * hook userEffect entra. Esse hook permite que nós detectemos a mudança no
     * componente e então realizar alguma ação.
     *
     * No meu caso, sempre que o componente for atualizado, eu quero
     * que o novo valor do counter seja armazenado localmente na máquina do
     * usuário.
     */
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
    /**
     * Aqui eu estou apenas pegando o contador armazenado localmente na máquina
     * do usuário.
     */
    const _localCounter = parseInt(localStorage.getItem('counter'), 10)

    /**
     * Aqui estou fazendo com que, caso exista um contador armazenado
     * localmente, então o estado counter começa a partir desse contador local,
     * se não, começa do zero.
     */
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
