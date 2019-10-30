import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../redux/reducers';
import createSagaMiddleware from 'redux-saga';
import { mainSaga } from '../sagas/mainSaga';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__;
const sagaMiddleware = createSagaMiddleware();
const enhancers = [
  applyMiddleware(sagaMiddleware),
  devtools()
];

const store = createStore(
  reducers,
  compose(...enhancers)
);

sagaMiddleware.run(mainSaga);


export default store;
