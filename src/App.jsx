import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ResposList";

function App() {

  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('')

  return (
    <> 
      <input type="text" onBlur={e => setNomeUsuario(e.target.value)} />
      

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>  
      )}

      {/* {formularioEstaVisivel && (
        <Formulario />
      )} */}

      {/* <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
    </>
  )
}

export default App


// #############################################################################################

// function App() {
  // const nome = 'Theo'

  // function retornaNoma() {
  //   return nome;
  // }

  // const pessoa = {
  //   nome: "Matheus"
  // }

  // let estaDeDia = true

// return (
  // <> 
    {/* <Perfil /> */}
    {/* <Perfil nome="Theo" endereco="https://github.com/Teo0250.png"/> */}

    {/* {exibeFormulario && (
      <Formulario />
    )} */}
     {/* <Formulario /> */}

    {/* <h1>Olá {pessoa.nome}!</h1> */}
    {/* <h2>Subtitulo</h2> */}
    {/* {estaDeDia === true ? 'Bom dia' : 'Boa tarde'}
    {estaDeDia ? 'Bom dia' : 'Boa tarde'}  */}
    {/* <br /> */}
    {/* <br /> */}
    {/* {estaDeDia && 'Bom dia'}  */}
  // </>
// )
// }

