import {
  SAVE_CHANGE_SERVICE,
} from '../actions/actionTypes';


const initialState = {
  loadingMode: false,
};

const serviceChangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CHANGE_SERVICE: {
      return { loadingMode: !state.loadingMode };
    }
    default:
      return state;
  }
};

export default serviceChangeReducer;
