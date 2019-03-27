import  { FETCH_PROPERTIES_POPULAR } from '../actions/types';


export default function(state = [], action) {
    
      //console.log(action);
      switch(action.type){
          case FETCH_PROPERTIES_POPULAR:
          // '' || false -> return false
              return action.payload; 
          default:
              return state;   
      }
  }