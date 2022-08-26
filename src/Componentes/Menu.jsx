import React from 'react'
import {Link} from 'react-router-dom'
import "./Menu.css"

export default function Menu() {
  return (
    
      <div>
        <div className='p'>
        <Link to="/Inicio">
            Inicio
        </Link>
        </div> 


        <div className='p'>
        <Link to="/Produto">
            Produto
        </Link>
        </div> 

        <div className='p'>
        <Link to="/Carrinho">
            Carrinho
        </Link>
        </div> 

        <div className='p'>
        <Link to="/Contato">
            Contato
        </Link>
        </div> 

        <div className='p'>
        <Link to="/Sobre">
            Sobre
        </Link>
        </div> 
    </div>
  )
}
