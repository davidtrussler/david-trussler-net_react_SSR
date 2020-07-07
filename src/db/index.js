const { Client } = require('pg'); 
const client = new Client({
	user: 'davidtrussler',
  host: 'localhost',
  database: 'blog',
  password: 'root'
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
