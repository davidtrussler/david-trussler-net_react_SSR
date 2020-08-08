// require('dotenv').config(); 

// const {Client} = require('pg'); 
// const query = 'SELECT * FROM posts;';  

// let client = new Client({
// 	connectionString: process.env.DATABASE_URL
// }); 

// client.connect(); 

// let getPosts = () => {
// 	return new Promise(function(resolve, reject) {
// 		client.query(query, (err, res) => {
// 			if (err) {
// 				console.log(err.stack); 
// 			} else {
// 				// console.log('res: ', res.rows); 
// 				resolve(res.rows); 
// 			}

// 			// client.end();
// 		}); 
// 	}); 
// }

// const fetchData = (callback) => {
// 	console.log('fetchData!'); 

// 	callback(
// 		function() {
// 			return {date: 'Wednesday', title: 'A very bad post'};
// 		}
// 	)
// }

function getPosts() {
  return {posts: [{date: 'Wednesday', title: 'A very bad post'}]};
}

export function fetchData(callback) {
  setTimeout(() => {
    callback(getPosts())
  }, 2000)
}

// module.exports = {
//   getPosts, 
//   fetchData
// }
