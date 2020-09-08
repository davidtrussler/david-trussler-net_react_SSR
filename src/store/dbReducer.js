const initialData = {}; 

export default function(state=initialData, action) {
	if (action.type == 'POSTS_UPDATED') {
		Object.assign(
			state, action.payload
		)
	} else if (action.type == 'POST_UPDATED') {
		Object.assign(
			state, {
				'postid': action.postid, 
				'post': action.payload
			}
		)
	} else if (action.type == 'BLOG_CALLED_MAIN') {
		Object.assign(
			state, {
				'context': 'allPosts'
			}
		)
	} else if (action.type == 'BLOG_CALLED_POST') {
		Object.assign(
			state, {
				'context': 'singlePost', 
				'postid': action.postid
			}
		)
	}

	return state; 
} 
