require('dotenv').config(); 

const {Client} = require('pg'); 

let client = new Client({
	connectionString: process.env.DATABASE_URL
}); 

client.connect(); 

let rows = []; 
let getPosts = () => {
	client.query('SELECT * FROM posts;', (err, res) => {
		if (err) throw err;

		for (let row of res.rows) {
			rows.push(row); 
		}

		client.end();
	});

  return rows; 
}

module.exports = {
  getPosts
}
