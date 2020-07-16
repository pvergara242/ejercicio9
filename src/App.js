import React from 'react';
import Form from './components/Form'
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      usuarios : [],
      formulario:{}
    };
    
  }
  
  componentDidMount(){
    let url= 'https://academlo-api-users.herokuapp.com/users'
    fetch(url)
    .then((response)=>{
      return response.json();
    })
    .then(myJson => {
      this.setState({ usuarios: myJson.data }); //Respuesta de la petición que ya podremos manejar con javascript
    })
    .catch(error=>console.log(error))
  }
    render(){
      return(
        <div>
          <Form usuarios={this.state.usuarios} />
        </div> 
      )
    }
    
  } 
 
export default App;


  