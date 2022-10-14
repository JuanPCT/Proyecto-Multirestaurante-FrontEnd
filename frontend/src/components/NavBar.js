import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark navbar-expand-lg" style={{backgroundColor: "#192537"}}>
                    <div className='container'>
                        <Link className="navbar-brand p-2" to="/"><img src="/img/logo-restaurante.jpeg" alt="50px" style={{height: "60px"}}/></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarText"
                            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Inicio<span className="sr-only"></span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Restaurantes</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Precios</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Opiniones</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Inicio/Login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Inicio/Registro">Registro</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
