import React from 'react';
import { Header } from '../shared/Header'; 
import { Main } from './Main'; 
import { Footer } from '../shared/Footer'; 
import { Provider } from 'react-redux'; 
import dataStore from '../../store'; 

const Blog = () => {
  return (
  	<Provider store={dataStore}>
	    <React.Fragment>
	      <Header/>
	      <Main posts={dataStore.getState().posts}/>
	      <Footer/>
	    </React.Fragment>
    </Provider>
  )
}

export default Blog
