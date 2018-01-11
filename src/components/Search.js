import React from 'react';
import { connect } from 'react-redux';
import { setTerm } from '../store';

export const SearchComponent = props => {
  const { term } = props;
  const buttonSubmit = term => {
    props.searchChange(term);
  }
  
  const inputChange= term => {
    props.setTerm(term);
  }

  return (
    <div className="search-bar">
      <input 
        value={ term }
        onChange={ e => inputChange(e.target.value) } 
      />
      <button 
        onClick={ () => buttonSubmit(term) }
      >
        Submit
       </button>
    </div>
  );
};

const mapState = ({term}) => ({
  term
});

const mapDispatch = dispatch => ({
  setTerm(data) {
    dispatch(setTerm(data));
  }
});

export const Search = connect(mapState, mapDispatch)(SearchComponent);
