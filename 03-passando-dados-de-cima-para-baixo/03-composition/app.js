(function() {
  'use strict'

  /**
   * Este arquivo está utilizando a sintaxe do JSX para criar os componentes.
   * A sintaxe JSX nos permite escrever código HTML diretamente no JavaScript.
   * Também é possível usar expressões JS dentro do HTML, por exemplo
   */

  const ContextName = React.createContext('name')

  function Component1() {
    const myName = 'JSX!'

    return (
      <ContextName.Provider value={myName}>
        <div className="component-1">
          <Component2 />
        </div>
      </ContextName.Provider>
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
    return (
      <div className="component-3">
        <Component4 />
      </div>
    )
  }

  function Component4() {
    return (
      <ContextName.Consumer>
        {name => (
          <div className="component-4">
            <p className="paragraph">
              {name}
            </p>
          </div>
        )}
      </ContextName.Consumer>
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
    window.root
  )
})()
