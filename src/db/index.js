require('dotenv').config(); 

const {Client} = require('pg'); 
const query = 'SELECT * FROM posts;';

let client = new Client({
	// Connect to database on main app
	// connectionString: process.env.DATABASE_URL
	// Connect to database on dt-net-redux-server-sid-rivskk
	connectionString: process.env.HEROKU_POSTGRESQL_PINK_URL
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
