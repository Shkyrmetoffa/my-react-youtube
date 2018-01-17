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
    <div className="col-lg-6">
      <div className="input-group">
        <input type="text" 
          className="form-control" 
          placeholder="Search for..."
          value={ term }
          onChange={ e => inputChange(e.target.value) }
        />
        <span 
          className="input-group-btn">
            <button 
              className="btn btn-default" 
              type="button"
              onClick={ () => buttonSubmit(term) }
            >
              Go!
            </button>
        </span>
      </div>
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
