import axios from 'axios';
import {FETCH_USER, FETCH_PROPERTIES} from './types';


// export const fetchUser = ()=>{
//     return function(dispatch) {
//         axios.get('/api/current_user')
//             .then(res=>dispatch({type: FETCH_USER, payload:res}));
//     }
    
// }

//action creator
export const fetchUser = () => async dispatch => {
        const res = await axios.get('/api/current_user');
        console.log("action res.data")
        console.log(res.data);
        dispatch({type: FETCH_USER, payload:res.data});
        
};

export const registerUser = (user) => async dispatch => {
        const res = await axios.post('/jwt/registerUser', user);

        dispatch({type: FETCH_USER, payload:res.data});
        
};
export const fetchProperties = () => async dispatch => {
        const res = await axios.get('/api/properties');
    
        dispatch({ type: FETCH_PROPERTIES, payload: res.data})
};

export const fetchPropertiesSearched = (data) => async dispatch => {
        const res = await axios.post('/api/properties',data);
        console.log(res);
    
        dispatch({ type: FETCH_PROPERTIES, payload: res.data})
};

export const fetchProperty = (propertyId) => async dispatch => {
        console.log("fetchPropertywith propertyId", propertyId);
        const res = await axios.get(`/api/properties/${propertyId}`);
    
        dispatch({ type: FETCH_PROPERTIES, payload: res.data})
};

export const fetchMyList = (userId) => async dispatch => {
        console.log("fetchmylist userId", userId);
        const res = await axios.get(`/api/mylist/${userId}`);
    
        dispatch({ type: FETCH_PROPERTIES, payload: res.data})
};