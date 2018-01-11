import { SET_VIDEOS, SET_TERM } from './actions';

export const videos = (state = [], action) => {
  switch (action.type) {
    case SET_VIDEOS: {
      const videos = action.payload.videos;
        return [...videos];
    }
    default: // Do nothing
  }
    return state;
};
  
export const term = (state = '', action) => {
  switch (action.type) {
    case SET_TERM: {
      return action.payload;
    }
    default: // Do nothing
  }
    return state;
};
