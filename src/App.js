import React, { Component } from 'react';
import './App.css';
import HeaderTitulo from './componentes/Utilidades/HeaderTitulo';
import InicioResoluciones from './componentes/Resoluciones/InicioResoluciones';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderTitulo titulo="Resoluciones"/>
        <InicioResoluciones/>
      </div>
    );
  }
}

export default App;
