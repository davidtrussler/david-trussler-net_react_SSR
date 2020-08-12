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
				reject(err); 
			} else {
				resolve(res.rows); 
			}
		})
	}).catch(reject => {
		return reject; 
	})
}

function fetchPosts(callback) {
	getPosts().then((response) => {
		callback(
			{posts: response}
		)
	}).catch()
}

module.exports = {
  fetchPosts
}
