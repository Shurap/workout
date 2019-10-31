import {combineReducers} from 'redux';
import language from './reducerLanguage';
import error from './reducerError';
import authStatus from './reducerAuthStatus';
import {reducer as formReducer} from 'redux-form';

const reducers = combineReducers({
  language,
  error,
  authStatus,
  form: formReducer
});

export default reducers;