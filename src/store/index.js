import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import courseReducer from './reducer/courseReducer';

const storeCombined = combineReducers({
  course: courseReducer,
});

const store = createStore(storeCombined, composeWithDevTools(applyMiddleware(thunk)));

export default store;
