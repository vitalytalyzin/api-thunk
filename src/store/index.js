import { createStore, combineReducers } from 'redux';
import serviceListReducer from '../reducers/serviceList';
import serviceEditReducer from '../reducers/serviceEdit';
import serviceRemoveReducer from '../reducers/serviceRemove';
import serviceChangeReducer from '../reducers/serviceChange';

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceEdit: serviceEditReducer,
  serviceRemove: serviceRemoveReducer,
  serviceChange: serviceChangeReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
