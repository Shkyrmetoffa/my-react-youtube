import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTerm } from '../store';

class SearchComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { term } = this.props;
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
    this.props.setTerm(term);
  }
}

const mapState = ({term}) => ({
  term
});
const mapDispatch = dispatch => ({
  setTerm(data) {
    dispatch(setTerm(data));
  }
});
export const Search = connect(mapState, mapDispatch)(SearchComponent);
