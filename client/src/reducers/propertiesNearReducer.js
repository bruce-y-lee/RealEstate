import  { FETCH_PROPERTIES_NEAR } from '../actions/types';


export default function(state = [], action) {
    
      //console.log(action);
      switch(action.type){
          case FETCH_PROPERTIES_NEAR:
          // '' || false -> return false
              return action.payload; 
          default:
              return state;   
      }
  }