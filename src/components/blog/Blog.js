import React from 'react';
import { Header } from '../shared/Header'; 
import { Main } from './Main'; 
import { Footer } from '../shared/Footer'; 
import dataStore from '../../store'; 

const Blog = () => {
	const context = dataStore.getState().context; 

	function renderMain() {
  	if (context == 'singlePost') {
      return <Main context={context} post={dataStore.getState().post}/>
  	} else {
      return <Main context={context} posts={dataStore.getState().posts}/>
  	}
	}

  return (
    <React.Fragment>
      <Header/>
      { renderMain() }
      <Footer/>
    </React.Fragment>
  )
}

export default Blog
