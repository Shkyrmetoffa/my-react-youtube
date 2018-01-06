import React, { Component } from 'react';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input 
          value={ this.state.term }
          onChange={ e => this.inputChange(e.target.value) } 
        />
        <button 
          // onClick={ this.setState({term}) }
        >
          Submit
        </button>
      </div>
    );
  }
  
  inputChange(term) {
    // this.setState({term});
    this.props.searchChange(term);
  }
}
