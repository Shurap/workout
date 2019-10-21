import {combineReducers} from 'redux';
import language from './reducerLanguage';
import {reducer as formReducer} from 'redux-form';

const reducers = combineReducers({
  language,
  form: formReducer
});

export default reducers;