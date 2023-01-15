import React from 'react'

import { Button, Paragraph } from 'megalodonx'
import 'megalodonx/dist/index.css'

const App = () => {
  return (
    <>
    <Button text="Click" onClick={() =>alert("Hatalı giriş")}/>
    <Paragraph text="Paragraf"/>
    </>
  )
}

export default App
