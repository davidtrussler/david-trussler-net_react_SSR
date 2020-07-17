// import {createStore, applyMiddleware} from 'redux';
// import rootReducer from '../reducers/rootReducer';
// import thunk from 'redux-thunk';

export default function configureStore() {
	const queryReducer = function() {
		console.log('query!')
	}

  // return createStore(
  //   rootReducer
  //   // applyMiddleware(thunk)
  // );
  reducer: {
  	query: queryReducer 
  }
}
