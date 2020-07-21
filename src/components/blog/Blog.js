import React from 'react';
import { createStore } from 'redux'; 
import { Provider } from 'react-redux';
import { modelReducer } from '../../store/modelReducer'; 
import { Header } from '../shared/Header'; 
import { Main } from './Main'; 
import { Footer } from '../shared/Footer'; 

const Blog = () => {
	// Creates new Redux store instance
	const store = createStore(modelReducer); 

	console.log('store: ', store); 

  return (
  	<Provider store={store}>
	    <React.Fragment>
	      <Header/>
	      <Main/>
	      <Footer/>
	    </React.Fragment>
    </Provider>
  )
}

export default Blog
