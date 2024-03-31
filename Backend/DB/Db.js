const { Client } = require('pg');

 const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'todo',
  // password: 'your_password_here', // Provide your password here if you've set one
  port: 5432,
});

client.connect(function(err) {
  if (err) {
    console.error('Error connecting to PostgreSQL database:', err.stack);
  } else {
    console.log('Connected to PostgreSQL database successfully!');
  }
});

module.exports = client