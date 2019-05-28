import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from '@react-native-community/async-storage';

import createGlobalReducer from './global-reducer';
import globalSagas from './global-sagas';


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware
];

const persistedReducer = persistReducer(persistConfig, createGlobalReducer())

const store = createStore(
  persistedReducer,
  compose(applyMiddleware(...middlewares))
);


sagaMiddleware.run(globalSagas);

const persistor = persistStore(store)

export default {store, persistor};
