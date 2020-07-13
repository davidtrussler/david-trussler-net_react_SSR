const { Client } = require('pg'); 

// const user = 'davidtrussler';
// const host = 'localhost';
// const database = 'postgresql-colorful-81881';
// const password = 'root'; 
// const port = '5432'; 
// const connectionString = 'postgres://' + user + ':' + password + '@' + host + ':' + port + '/' + database; 
// const connectionString = 'postgres://dbfxyrdtlddylg:9bfedda067aea7c8d2fa3bf1608665ffb274454b9297afdc73ec9887cf69718e@ec2-54-75-244-161.eu-west-1.compute.amazonaws.com:5432/d5telim30j1g04'; 
// const connectionString = process.env.DATABASE_URL; 
// const connectionString = 'postgres://localhost:5432/postgresql-colorful-81881'; 
// const connectionString = 'blog'; 
let client = new Client({
	connectionString: 'postgres://localhost:5432/postgresql-colorful-81881' // process.env.DATABASE_URL
	// ssl: {
	// 	rejectUnauthorized: false
	// }
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
