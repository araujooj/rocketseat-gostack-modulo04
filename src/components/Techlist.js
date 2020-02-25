import React, { Component } from "react";
import TechItem from "./TechItem";
// import { Container } from './styles';

export default class Techlist extends Component {
  state = {
    techs: [],
    newTech: ""
  };

  // executado quando aparece
  componentDidMount() {
    const techs = localStorage.getItem('techs')

    if(techs) {
      this.setState({ techs: JSON.parse(techs)})
    }
  }

  // executado quando acontece alterações nas props ou state
  componentDidUpdate(_, prevState) {
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }
  }
  //executado quando o component deixa de existir
  componentWillUnmount() {}

  handleInputChange = e => {
    this.setState({
      newTech: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ""
    });
  };

  handleDelete = tech => {
    this.setState({
      techs: this.state.techs.filter(t => t !== tech)
    });
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <ul>
            {this.state.techs.map(tech => (
              <TechItem
                key={tech}
                tech={tech}
                onDelete={() => this.handleDelete(tech)}
              />
            ))}
          </ul>

          <input
            value={this.state.newTech}
            type="text"
            onChange={this.handleInputChange}
          ></input>
          <button type="submit">Enviar</button>
        </form>
      </>
    );
  }
}
