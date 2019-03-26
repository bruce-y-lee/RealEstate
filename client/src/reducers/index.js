import {combineReducers} from 'redux';
import { reducer as reduxForm} from 'redux-form';
import authReducer from './authReducer';
import propertiesReducer from './propertiesReducer';
import propertiesNearReducer from './propertiesNearReducer';



export default combineReducers({ 
    auth: authReducer,
    form: reduxForm,
    properties: propertiesReducer,
    propertiesNear: propertiesNearReducer
    
});
