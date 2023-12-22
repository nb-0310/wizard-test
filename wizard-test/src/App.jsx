import { useEffect, useState } from 'react'
import './App.css'
import {erc20} from "@openzeppelin/wizard"

function App() {
  const [code, setCode] = useState('')
  const [mintable, setMintable] = useState(false)

  useEffect(() => {
    const contractParams = {
      name: 'ExampleToken',
      symbol: 'ETK',
      mintable
    };

    setCode(erc20.print(contractParams))
  }, [mintable])

  const handleChange = (e) => {
    console.log(e)
    setMintable(e.target.checked)
  }

  return (
    <>
      <input type="checkbox" onChange={(e) => handleChange(e)} />
      <pre>
        {code}
      </pre>
    </>
  )
}

export default App
