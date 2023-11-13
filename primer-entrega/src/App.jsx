import { useState } from 'react'
import './App.css'
import Header from './Components.jsx/Header'
import ItemListContainer from './Components.jsx/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <ItemListContainer />
    </>
  )
}

export default App
