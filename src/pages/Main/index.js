import React, { Component } from "react";
import api from "../../services/api";

import "./styles.css";
import logo from "../../assets/logo.svg";

class Main extends Component {
  state = {
    nameNewBox: "", 
  };

  handleSubmit = async e => {
    e.preventDefault();

    const response = await api.post("/boxes", {
      title: this.state.nameNewBox,
    });

    this.props.history.push(`/box/${response.data._id}`);

    console.log(response.data);
  };

  handleInputChange = e => {
    this.setState({ nameNewBox: e.target.value });
  };

  render() {
    return (
      <div id="main-container">
        <form onSubmit={this.handleSubmit}>
          <img src={logo} alt="" />
          <input
            placeholder="Informe o nome para a Box"
            value={this.state.nameNewBox}
            onChange={this.handleInputChange}
          />
          <button type="submit">
            Criar
          </button>
        </form>
      </div>
    );
  }
}

export default Main;