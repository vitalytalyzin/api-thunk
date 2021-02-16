import {
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  error: null,
  items: [],
};

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SERVICES_REQUEST: {
      return {...state, isLoading: true, error: null };
    }
    case FETCH_SERVICES_SUCCESS: {
      const { items } = action.payload;
      return {...state, isLoading: false, items };
    }
    case FETCH_SERVICES_FAILURE: {
      const { error } = action.payload;
      return {...state, isLoading: false, error };
    }
    default:
      return state;
  }
}
