require('dotenv').config(); 

const {Client} = require('pg'); 
const query = 'SELECT * FROM posts;';  

let client = new Client({
	connectionString: process.env.DATABASE_URL
}); 

client.connect(); 

function getPosts() {
	return new Promise((resolve, reject) => {
		client.query(query, (err, res) => {
			if (err) {
				console.log(err.stack); 
			} else {
				// console.log('res: ', res.rows); 
				resolve(res.rows); 
			}
		})
	})
}

function fetchPosts(callback) {
	console.log('fetchPosts!'); 

	getPosts().then((response) => {
		console.log('response: ', response)

		callback(
			{posts: response}
		)
	})
}

module.exports = {
  fetchPosts
}
