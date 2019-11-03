import {combineReducers} from 'redux';
import language from './reducerLanguage';
import error from './reducerError';
import authStatus from './reducerAuthStatus';
import currentUser from './reducerCurrentUser';
import loading from './reducerLoading';
import {reducer as formReducer} from 'redux-form';

const reducers = combineReducers({
  language,
  error,
  authStatus,
  currentUser,
  loading,
  form: formReducer
});

export default reducers;