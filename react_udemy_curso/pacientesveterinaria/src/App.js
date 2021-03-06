import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header.js';
import NuevaCita from './components/NuevaCita.js';
import ListaCitas from './components/ListaCitas.js';

class App extends Component {

  state = {
    citas: []
  }

  crearNuevaCita = datos => {
    // copiar el state actual
    const citas = [...this.state.citas, datos];

    this.setState({
      citas
    });
  }

  render() {
    return(
      <div className="container">
      <Header
        titulo='Administrador Pacientes Veterinaria'
      />
        <div className="row">
          <div className="col-md-10 mx-auto">
              <NuevaCita
                crearNuevaCita={this.crearNuevaCita}
              />
          </div>

          <div className="mt-5 col-md-10 mx-auto">
              <ListaCitas
              />
          </div>
          
        </div>

      </div>
    );
  }

}

export default App;
