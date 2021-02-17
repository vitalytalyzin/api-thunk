import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
