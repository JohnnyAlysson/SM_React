import { useEffect, useState } from "react"

function App() {
  const [primeiroNumero,setPrimeiroNumero] = useState(0);
  const [segundoNumero,setSegundoNumero] = useState(0);

  function aumentar(){
    setPrimeiroNumero(primeiroNumero+1)

  };

  useEffect(()=>{
    setSegundoNumero(primeiroNumero*2)
  },[primeiroNumero])

  // useEffect(()=>{
  //   // Efeito colateral
  // },[`o que causa o efeito`])

  return (
    <>
      <h1>Aula 3</h1>
      <button onClick={aumentar}>Clique </button>
      <p>{primeiroNumero}</p>
      <p>{segundoNumero}</p>
    </>
    
  )
}

export default App