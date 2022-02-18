import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import courseReducer from './reducer/courseReducer';
import payReducer from './reducer/payReducer';
import userReducer from './reducer/userReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const storeCombined = combineReducers({
  course: courseReducer,
  pay: payReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, storeCombined);

const configureStore = () => {
  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk)),
  );
  const persistor = persistStore(store);
  return { store, persistor };
};

// const store = createStore(storeCombined, composeWithDevTools(applyMiddleware(thunk)));

export default configureStore;
