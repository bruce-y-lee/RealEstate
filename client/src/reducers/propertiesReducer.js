import  { FETCH_PROPERTIES } from '../actions/types';


export default function(state = [], action) {
    
      //console.log(action);
      switch(action.type){
          case FETCH_PROPERTIES:
          // '' || false -> return false
              return action.payload; 
          default:
              return state;   
      }
  }