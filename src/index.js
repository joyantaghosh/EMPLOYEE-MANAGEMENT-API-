import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import {Pool} from 'pg';


dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pool = new Pool({
    user:process.env.DB_USER,
    host:process.env.DB_HOST,
    database:process.env.DB_NAME,
    password:process.env.DB_PASSWORD,
    port:process.env.DB_PORT||5432
});

pool.connect((err, client, release) => {
    if(err){
        console.error('❌Error connecting to the database', err.stack);
    } else {
        console.log('✅Connected to the database');
        release();
    }
});

app.get('/', (req, res) => { 
    res.json({ message: 'Employee Management API', version: '1.0.0' }) 
});


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
