import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [cep, setCep] = useState("");
  const [cepInfo, setCepInfo] = useState({});

  async function getCepInfo(e) {
    e.preventDefault();
    try {
      const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      console.log(data);
      setCepInfo(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>Forms</h1>
      <form onSubmit={getCepInfo} method="get">
        <label htmlFor="cep">Cep</label>
        <input
          type="text"
          id="cep"
          placeholder="Type your cep"
          onChange={(e) => setCep(e.target.value)}
        />
        <button>Enviar</button>
      </form>

      <p>{cepInfo.logradouro}</p>
      <p>{cepInfo.bairro}</p>
      <p>{cepInfo.localidade}</p>
      <p>{cepInfo.estado}</p>
    </>
  );
}
export default App;




// RESOLUÇAO PROFESSOR:
// import { useState } from "react";
// import "./App.css";
// import axios from "axios";

// function App() {
//   const [cep, setCep] = useState("");
//   const [resultado, setResultado] = useState();

//   async function consultarCEP(e) {
//     e.preventDefault();
//     try {
//       const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
//       setResultado(data);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <>
//       <h1>Consultando CEP</h1>

//       <form onSubmit={consultarCEP}>
//         <label htmlFor="cep">CEP</label>
//         <input
//           type="text"
//           id="cep"
//           name="cep"
//           placeholder="Digite seu CEP"
//           onChange={(e) => setCep(e.target.value)}
//         />
//         <button>Buscar</button>
//       </form>

//       {resultado && (
//         <div>
//           <h2>Endereço: {resultado.logradouro}</h2>
//           <p>Complemento: {resultado.complemento}</p>
//           <p>Bairro: {resultado.bairro}</p>
//           <p>Cidade: {resultado.localidade}</p>
//           <p>Estado: {resultado.estado}</p>
//           <p>Região: {resultado.regiao}</p>
//           <p>DDD: {resultado.ddd}</p>
//         </div>
//       )}
//     </>
//   );
// }

// export default App;
