import React from 'react'

import { ExampleComponent, Button } from 'megalodonx'
import 'megalodonx/dist/index.css'

const App = () => {
  return (
    <>
    <ExampleComponent text="Create React Library Example 😄" />
    <Button text="Click" onClick={() =>alert("Hatalı giriş")}/>
    </>
  )
}

export default App
