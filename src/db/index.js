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
				resolve(res.rows); 
			}
		})
	})
}

function fetchPosts(callback) {
	getPosts().then((response) => {
		callback(
			{posts: response}
		)
	})
}

module.exports = {
  fetchPosts
}
