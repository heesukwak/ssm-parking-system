import { createConnection } from 'mysql2/promise';

async function testConnection() {
  const connection = await createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'DY_PMS',
  });

  try {
    console.log('Connecting to MySQL...');
    await connection.connect();
    console.log('Connected to MySQL!');
  } catch (err) {
    console.error('Error connecting to MySQL:', err);
  } finally {
    await connection.end();
    console.log('Connection closed.');
  }
}

testConnection();