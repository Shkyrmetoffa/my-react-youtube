import React, { Component } from 'react';
// import { Link } from "react-router-dom";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  render() {
    const { term } = this.state;
    return (
      <div className="search-bar">
        <input 
          value={ term }
          onChange={ e => this.inputChange(e.target.value) } 
        />
        <button 
          onClick={ () => this.buttonSubmit(term) }
        >
          Submit
        </button>
      </div>
    );
  }
  buttonSubmit(term) {
    this.props.searchChange(term);
  }

  inputChange(term) {
    this.setState({term});
  }
}
