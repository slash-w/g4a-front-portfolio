import React from 'react'
import NavBar from "../componentes/navbar/NavBar.jsx"
import Footer from "../componentes/footer/Footer.jsx"
import { Outlet } from 'react-router-dom'

export default function Main(){
  return (
    <div>
    <NavBar/>
    <Outlet/> 
    <Footer/>
    </div> 
 )
}
//El objetivo principal de un layout es proporcionar una estructura coherente
// y reutilizable para colocar los diferentes componentes y contenido de una página.