import { useLocation } from "react-router-dom"

export const Result= () =>{
  const state = useLocation();
  const {namee,email,message} = state

  return (
    <>
      <h1>Result</h1>
      <p> Ola {namee}, Your message {message}, was sent to {email}</p>
      
    </>
  )
}