import { createStore } from 'redux'; 
import dbReducer from './dbReducer'; 

export default createStore(dbReducer); 
