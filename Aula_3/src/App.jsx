import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const [personagens,setPersonagens] = useState([])

  async function buscarPersonagens(){
    const {data} = await axios.get("https://rickandmortyapi.com/api/character")
    console.log(data.results)
    setPersonagens(data.results)
  }

  useEffect(()=>{
    buscarPersonagens()
  },[]) //SEMPRE QUE VOCÊ CHAMAR UM USEEFFECT E NÃO PASSAR NADA NO ARRAY DE DEPENDENCIA SIGNIFICA QUE ELE SÓ VAI ACONTECER UMA VEZ Q É QUANDO A PÁGINA CARREGA.

    return (
    <>
      <h1>Consumindo API usando useEffect</h1>
      {personagens && personagens.map((element)=>(
        <div>
          <h2>{element.name}</h2>
          <p>{element.status}</p>
          <img width={150} src={element.image}/>
        </div>
      ))}
    </>
  )
}

export default App