import {initialData} from './initialData'; 
import { getPosts } from '../db'; 

export default function(state=initialData, action) {
	console.log('state: ', state); 
	console.log('action: ', action); 

	getPosts().then(response => {
		console.log('response: ', response); 

		return new Promise(function(resolve, reject) {
			return resolve(); 
		}); 
		// state = response; 
	// )
	}); 
	
	// return initialData; 
} 
