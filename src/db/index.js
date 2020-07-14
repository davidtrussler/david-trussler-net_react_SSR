require('dotenv').config(); 

const {Client} = require('pg'); 

// const client = new Client({
// 	connectionString: process.env.DATABASE_URL
// }); 

// client.connect(); 

const getPosts = () => {
	console.log('getPosts!'); 

	let client = new Client({
		connectionString: process.env.DATABASE_URL
	}); 

	// console.log('client: ', client); 

	client.connect(); 

	let rows = []; 

	client.query('SELECT * FROM posts;', (err, res) => {
		if (err) throw err;

		// console.log('result: ', res.rows); 

		res.rows.forEach(function(row) {
			// console.log('row: ', row); 
			rows.push(row); 
		}); 

		// for (let row of res.rows) {
		// 	rows.push(row); 
		// }

		client.end();

		// console.log('rows: ', rows); 

	  return rows; 
	});

	// return 'hello'; 

  return rows; 
}

module.exports = {
  getPosts
}
