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
// Get all employees
app.get('/api/employees', async (req, res) => {
    try{
        const result = await pool.query('SELECT * FROM employees');
        res.json({
            status: 'success',
            data: result.rows,
            count: result.rowCount
        })
    }
    catch(err){
        console.error('❌Error fetching employees', err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get all employees by id
app.get('/api/employees/:id', async (req, res) => {
    try{
        const result = await pool.query('SELECT * FROM employees WHERE emp_id=$1', [req.params.id]);
        res.json({
            status: 'success',
            data: result.rows,
            count: result.rowCount
        })
    }
    catch(err){
        console.error('❌Error fetching employees', err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get all employees by department
app.get('/api/employees/dept/:dept', async (req, res) => {
    try{
        const result = await pool.query('SELECT * FROM employees WHERE dept=$1', [req.params.dept]);
        res.json({
            status: 'success',
            data: result.rows,
            count: result.rowCount
        })
    }
    catch(err){
        console.error('❌Error fetching employees', err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Create new employee
app.post('/api/employees', async (req, res) => {
    try{

    }
    catch(err){
        console.error('❌Error creating employee', err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update employee
app.put('/api/employees/:id', async (req, res) => {
    try{

    }
    catch(err){
        console.error('❌Error updating employee', err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
// Delete employee
app.delete('/api/employees/:id', async (req, res) => {
    try{


    }
    catch(err){
        console.error('❌Error deleting employee', err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get employee statistics
app.get('/api/stats', async (req, res) => {
    try{

    }
    catch(err){
        console.error('❌Error fetching employee statistics', err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
// Search employees (query params: name, dept, min_salary, max_salary)
app.get('/api/employees/search', async (req, res) => {
    try{

    }
    catch(err){
        console.error('❌Error searching employees', err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
