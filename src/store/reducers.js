import { ADD_TASK, SELECT_VIDEO } from './actions';

export const tasks = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK: {
      return [...state, ...action.payload];
    }
  }
  return state;
};
export const video = (state = "", action) => {
    switch (action.type) {
      case SELECT_VIDEO: {
          return action.payload;
      }
    }
    return state;
  };
