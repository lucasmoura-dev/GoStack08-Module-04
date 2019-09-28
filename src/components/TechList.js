import React, { Component } from 'react';

class TechList extends Component {
  state = {
    newTech: '',
    techs: [
      'Node.js',
      'React JS',
      'React Native',
    ]
  };

  /** Toda função própria dentro de um componente em Classe, essa função
   *  precisa ser escrita no formato de arrow functions. Caso contrário, 
   *  ela nunca teria acesso ao this. As variáveis dentro do state são imutáveis,
   *  ela não pode sofrer mutação, será necessário usar a função setState()
    */
  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ 
      techs: [...this.state.techs, this.state.newTech],
      newTech: '',
     });
  }

  /** Todo component do tipo classe precisa ter o método render. Definir o value
   *  do input com o valor do state é uma boa prática.
   */
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => <li key={tech}>{tech}</li>)}
        </ul>
        <input 
          type="text" 
          onChange={this.handleInputChange} 
          value={this.state.newTech} 
        />
        <button type="submit">Enviar</button>
      </form>
    )
  }
}

export default TechList;