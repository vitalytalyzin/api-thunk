import {
  CHANGE_SERVICE,
  EDIT_SERVICE_FAILURE,
  EDIT_SERVICE_REQUEST,
  EDIT_SERVICE_SUCCESS,
} from '../actions/actionTypes';


const initialState = {
  isLoading: false,
  error: null,
  serviceInfo: {
    id: null,
    name: '',
    price: '',
    content: '',
  },
};

const serviceEditReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_SERVICE_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case EDIT_SERVICE_SUCCESS: {
      const { serviceInfo } = action.payload;
      return { ...state, isLoading: false, serviceInfo };
    }
    case EDIT_SERVICE_FAILURE: {
      const { error } = action.payload;
      return { ...state, isLoading: false, error };
    }
    case CHANGE_SERVICE: {
      const { name, value } = action.payload;
      return {
        ...state,
        serviceInfo: { ...state.serviceInfo, [name]: value },
      };
    }
    default:
      return state;
  }
};

export default serviceEditReducer;
