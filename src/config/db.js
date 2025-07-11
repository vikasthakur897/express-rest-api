import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';

dotenv.config();

console.log('Connecting to the database...');

console.log(`DB_USER: ${process.env.DB_USER}`);


const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    port: process.env.DB_DBPORT,
});


pool.on('connect', () => {
    console.log('Connected to the database');
})

export default pool;