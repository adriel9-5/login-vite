import "./Formulario.css"
import { useState } from "react"
import React from 'react'
import styled from "styled-components";


const FORM = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`

export const H1 = styled.h1`
color : #fff;
text-align : center;
`

const Input = styled.input`
padding: 10px 30px;
margin: 10px;
border: none;
border-radius: 10px;
`

export const Button = styled.button`
padding: 10px 10px;
border: none;
border-radius: 10px;
font-size: 1rem;
font-weight: 600;
cursor: pointer;
transition: .5s;

&:hover{
  background-color: #684f4f;
  color: #fff;
}
`;

const P = styled.p`
color: #cf3c3c;
text-align: center;
margin-top: 50px;
font-size: 22px;
`



function Formulario({setUser}) {
    const [nombre, setNombre] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [error, setError] = useState(false);

const handleSubmit = (e)=>{
    e.preventDefault()

    if (nombre === "" || contraseña === "") {
        setError(true)
        return
    }
        setError(false)
        setUser([nombre])
        
}
   
  return (
    <div>
        <H1>Login</H1>

        <FORM className="form" onSubmit={handleSubmit}>
        <Input type="text" value={nombre} onChange={e => setNombre(e.target.value)} />
        <Input type="password" value={contraseña} onChange={e => setContraseña(e.target.value)} />
        <Button>Iniciar sesión</Button>
        </FORM>

        {error && <P>Todos los campos son obligatorios</P>}
    </div>
  )
}

export default Formulario