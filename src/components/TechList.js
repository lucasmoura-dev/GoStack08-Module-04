import React, { Component } from 'react';

import TechItem from './TechItem';

class TechList extends Component {
  /*static propTypes = {};*/

  /*static defaultProps = {
    tech: 'Oculto'
  }*/

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
   *  ela não pode sofrer mutação, será necessário usar a função setState().,
   *  As propriedades dentro de um componente com Classe ficam em this.props.
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

  handleDelete = (tech) => {
    this.setState({
      techs: this.state.techs.filter(t => t !== tech),
    })
  }

  /** Todo component do tipo classe precisa ter o método render. Definir o value
   *  do input com o valor do state é uma boa prática. 
   *  Propriedade é tudo que passa como parâmetro para o elemento dentro da tag.
   */
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem 
              key={tech} 
              tech={tech} 
              onDelete={() => this.handleDelete(tech)} 
            />
          ))}
          <TechItem />
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