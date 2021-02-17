import {
  REMOVE_SERVICE,
} from '../actions/actionTypes';


const initialState = [];

const serviceRemoveReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_SERVICE: {
      const { id } = action.payload;
      return [...state, id];
    }
    default:
      return state;
  }
};

export default serviceRemoveReducer;
