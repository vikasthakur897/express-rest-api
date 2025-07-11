import express from 'express';
import dotenv from  'dotenv';
import cors from 'cors';
import pool from './config/db.js';
import userRouter from './routes/userRouter.js'
import errorHandler from './middlewares/error-handler.js';
import { createUserTable } from './data/createUserTable.js';


dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

//Middleware

app.use(express.json());
app.use(cors());

// Error handling middleware

app.use(errorHandler);

//Create user table if it doesn't exist
 createUserTable();

//Routes

app.get('/', (req, res) => {
    res.send('Welcome to the REST API'); 
   });

app.use('/api', userRouter);



app.get('/check-database', async(req, res) => {
    const result = await pool.query('SELECT current_database()');
    res.send(`Connected to database: ${result.rows[0].current_database}`);
})

// Error handling


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})