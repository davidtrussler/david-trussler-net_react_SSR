import React, { Component } from 'react';
import {Header} from '../shared/Header'; 
import {Main} from './Main'; 
import {Footer} from '../shared/Footer'; 

const db = require('../../db'); 

export default class Blog extends Component {
	constructor() {
		super(); 

		this.state = {
			rows: []
		}
	} 

	render() {
		let _this = this; 

		db.getPosts().then(function(response) {
			response.forEach(function(row) {
				// console.log('row: ', row); 

				_this.setState({
					rows: response
				}); 
			}); 

			console.log('state: ', _this.state); 
		})

	  return (
	    <React.Fragment>
	      <Header/>
	      <Main rows={this.state.rows}/>
	      <Footer/>
	    </React.Fragment>
	  )
	}
}

// export default Blog
