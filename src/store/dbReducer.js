import { initialData } from './initialData'; 
// import { getPosts } from '../db'; 

export default function(state=initialData, action) {
	console.log('state: ', state); 
	console.log('action: ', action); 

	if (action.type == 'POSTS_UPDATED') {
		Object.assign(state, action.payload)
	}



	// getPosts().then(response => {
	// 	console.log('response: ', response); 

	// 	return new Promise(function(resolve, reject) {
	// 		return resolve(); 
	// 	}); 
	// 	// state = response; 
	// // )
	// }); 
	
	// setTimeout(
	// 	function() {
	return state; 
	// 	}, 0
	// )
} 
