// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export const Contact = () => {
//   const { name, setName } = useState("");
//   const { email, setEmail } = useState("");
//   const { message, setMessage } = useState("");
//   const { error, setError } = useState("");

//   const navigate = useNavigate();

//   function checarEnvio(e) {
//     e.preventDefault();
//     if (name && email && message) {
//       navigate("/result",{state:name});
//     } else {
//       setError("There was an error, fill all the fields please.")
//     }
//   }

//   return (
//     <>
//       <h1 className="text-3xl font-bold text-center mb-6">Contato</h1>
//       <form
//         className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4"
//         onSubmit={checarEnvio}
//       >
//         <div className="flex flex-col">
//           <label htmlFor="nome" className="text-lg font-semibold mb-2">
//             Nome
//           </label>
//           <input
//             type="text"
//             id="nome"
//             name="nome"
//             placeholder="Digite seu Nome"
//             onChange={(e) => setName(e.target.value)}
//             className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label htmlFor="email" className="text-lg font-semibold mb-2">
//             E-Mail
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Digite seu E-Mail"
//             onChange={(e) => setEmail(e.target.value)}
//             className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label htmlFor="mensagem" className="text-lg font-semibold mb-2">
//             Mensagem
//           </label>
//           <textarea
//             name="mensagem"
//             id="mensagem"
//             cols={28}
//             rows={4}
//             onChange={(e) => setMessage(e.target.value)}
//             className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           ></textarea>
//         </div>

//         <button className="w-full bg-blue-600 text-white p-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300">
//           Enviar
//         </button>
//         {error && <p> {error} </p>}
//       </form>
//     </>
//   );
// };


import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"



export const Contact = () =>{

    const [namee,setNamee] = useState("")
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate()

    function checarEnvio(e){
        e.preventDefault()
        if(namee &&  email && message ){

            navigate("/result", {state: {namee,email,message}})
        }else{
            setError("Preencha todos os campos")
        }
        
        
    }


    return (
        <>
            <h1>contato</h1>
            <form onSubmit={checarEnvio}>
                <div>
                    <label htmlFor="email"> e-mail:</label>
                    <input type="email" id="email" name="email" placeholder="digite seu email" onChange={(e)=>setNamee(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="nome">nome:</label>
                <input type="text" id="nome" name="nome" placeholder="digite seu nome"  onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="mensagem">mensagem:</label>
                    <textarea id="mensagem" name="mensagem" placeholder="digite sua mensagem" cols={28} onChange={(e)=>setMessage(e.target.value)}></textarea>
                </div>
                <button >enviar</button>
                {error && <p>{error}</p>}

            </form>
        </>
        
    )
}