import React from 'react';



class Form extends React.Component {
  constructor(props){
    super(props)
      this.state = {}
  }
  agregarUsuarios(event){
    event.preventDefault();
    fetch('https://academlo-api-users.herokuapp.com/users',{
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(
       this.state
    )
  })  
}
handleInput = event => {
  this.setState({ [event.target.name]: event.target.value });
};

eliminarUsuarios(id){
    fetch(' https://academlo-api-users.herokuapp.com/user/' + id, {
    method: 'DELETE',
    })
}

    render(){
      return (
            <div>
                <form  onInput={this.handleInput} onSubmit={this.agregarUsuarios.bind(this)}  >
                <input name="name" type="text" placeholder="ingrese el nombre " />
                <input name="lastname" type="text" placeholder="ingrese el apellido" />
                <input name="email" type="email" placeholder="ingrese el correo" />
                <input name="password" type="password" placeholder="ingrese la contraseña" />
                <button>Agregar usuarios</button>
                </form>
                {this.props.usuarios.map((usuarios,index)=>{
                return(
                    <tbody >
                    <tr key={index}>
                        <td>{usuarios.name}</td>
                        <td>{usuarios.lastname}</td>
                        <td>{usuarios.email}</td>
                        <td>{usuarios.password}</td>
                        <button>editar</button>
                        <button onClick={this.eliminarUsuarios.bind(this , usuarios.id)}>Eliminar usuarios</button>
                    </tr>
                    </tbody>
        )
      })}
      <div></div>
      </div>
    );
  }
}

export default Form ;