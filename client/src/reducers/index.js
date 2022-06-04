import { combineReducers } from 'redux';
import endpointReducer from './endpointReducer';

export default combineReducers({
  currentEndpoint: endpointReducer
})