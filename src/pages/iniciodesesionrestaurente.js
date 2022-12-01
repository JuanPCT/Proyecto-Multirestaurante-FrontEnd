import React from 'react'

import { Helmet } from 'react-helmet'

import './iniciodesesionrestaurente.css'

const Iniciodesesionrestaurente = (props) => {
  return (
    <div className="iniciodesesionrestaurente-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="iniciodesesionrestaurente-iniciodesesionrestaurente">
        <img
          alt="Rectangle661622"
          src="/playground_assets/rectangle661622-j1x-200h.png"
          className="iniciodesesionrestaurente-rectangle66"
        />
        <img
          alt="Captura81622"
          src="/playground_assets/captura81622-mxr-200h.png"
          className="iniciodesesionrestaurente-captura8"
        />
        <img
          alt="Rectangle671622"
          src="/playground_assets/rectangle671622-6p9o-800w.png"
          className="iniciodesesionrestaurente-rectangle67"
        />
        <img
          alt="restaurante121623"
          src="/playground_assets/restaurante121623-5ws-800w.png"
          className="iniciodesesionrestaurente-restaurante12"
        />
        <span className="iniciodesesionrestaurente-text">
          <span>ACCEDE A TU CUENTA</span>
        </span>
        <img
          alt="Rectangle681623"
          src="/playground_assets/rectangle681623-sp8-200h.png"
          className="iniciodesesionrestaurente-rectangle68"
        />
        <span className="iniciodesesionrestaurente-text02">
          <span>Correo electronico</span>
        </span>
        <img
          alt="Rectangle691623"
          src="/playground_assets/rectangle691623-10xk-200h.png"
          className="iniciodesesionrestaurente-rectangle69"
        />
        <span className="iniciodesesionrestaurente-text04">
          <span>Contraseña</span>
        </span>
        <span className="iniciodesesionrestaurente-text06">
          <span>¿ Olvidaste tu contraseña ?</span>
        </span>
        <img
          alt="Rectangle701624"
          src="/playground_assets/rectangle701624-ut7a-200h.png"
          className="iniciodesesionrestaurente-rectangle70"
        />
        <span className="iniciodesesionrestaurente-text08">
          <span>CONTINUAR</span>
        </span>
        <span className="iniciodesesionrestaurente-text10">
          <span>
            Si todavia no haz registrado tu restaurante ,
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <span className="iniciodesesionrestaurente-text12">
          <span>¡ por favor registrate aqui !</span>
        </span>
      </div>
    </div>
  )
}

export default Iniciodesesionrestaurente