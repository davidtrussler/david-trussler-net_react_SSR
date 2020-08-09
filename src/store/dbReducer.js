const initialData = {}; 

export default function(state=initialData, action) {
	if (action.type == 'POSTS_UPDATED') {
		Object.assign(state, action.payload)
	}

	return state; 
} 
