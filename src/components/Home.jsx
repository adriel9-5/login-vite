import React from 'react'
import { Button, H1 } from './Formulario';
import styled from 'styled-components';



const H2 = styled.h2`
color: #4e31f3;
`



function Home({user, setUser}) {

    const handleLogout = ()=>{
        setUser([]);
    }
  return (
    <div>
        <H1>Bienvenido!!</H1>
        <H2>{user}</H2>
        <Button onClick={handleLogout}>Cerrar sesión</Button>
    </div>
  )
}

export default Home