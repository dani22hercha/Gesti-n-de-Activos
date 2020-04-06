import React from 'react';
import './App.css';

class Helloworld extends React.Component{
  state={
    show:true
  }

  toggleShow = () =>{
    this.setState({show:false})
  }

  render() {
    if(this.state.show){
      return(
        <div id="hello">
        <h3>{this.props.subtitle}</h3>
        {this.props.mytext}
        <button onClick={this.toggleShow}>Toggle show</button>
        </div>
      )
    } else{
      return <h1>
        No hay elementos
        <button onClick={this.toggleShow}>
          toggle show
        </button>


      </h1>
    }
  }
}

function App() {
  return (    
    <div>Gestión de Activos
      <p>Integrantes:</p>
      <p>Miguel Angel Hincapié: Scrum Master</p>
      <p>Anderson Olarte: Product Owner</p>
      <p>Dan Ellis Echavarría: Programador</p>
      <p>Juan Manuel Zuluaga: Programador</p>
      <p>José Miguel Jaraba: Programador</p>
      <p>Daniela Hernández Chavarro: Programadora</p>
      
      <p>Misión: Lorem Ipsum...</p>
      <p>Visión: Lorem Ipsum...</p>
      
      <Helloworld mytext="Clic" subtitle="Instituciones"/> 
      <Helloworld mytext="Clic" subtitle="Promedios"/> 
      <Helloworld mytext="Clic" subtitle="Cuestionario Investigativo sobre Gestión de Activos Físicos Hospitalarios"/>
    </div>
  );
}

export default App;

