import React from 'react';
import './styles.scss'
import Button from '../../core/components/Button';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="main-title">
        Desafio do Capítulo 3, <br />
        Bootcamp DevSuperior
      </h1>
      <p className="main-text">
        Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br />
        <br />
        Favor observar as instruções passadas no capítulo sobre a elaboração <br />
        deste projeto.
        <br />
        <br />
        Este design foi adaptado a partir de Ant Design System for Figma, 
        <br />
        de Mateusz Wierzbicki: antforfigma@gmail.com</p>
        <div className="main-button">
          <Button>Começar</Button>
        </div>
    </div>
    
  );
}

export default Home;
