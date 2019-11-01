import {combineReducers} from 'redux';
import language from './reducerLanguage';
import error from './reducerError';
import authStatus from './reducerAuthStatus';
import currentUser from './reducerCurrentUser'
import {reducer as formReducer} from 'redux-form';

const reducers = combineReducers({
  language,
  error,
  authStatus,
  currentUser,
  form: formReducer
});

export default reducers;