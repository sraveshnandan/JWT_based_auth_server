const express = require('express');
const connectToDb = require('./models/database');
const registerRoute = require('./Routes/user');
const loginRoute = require('./Routes/login');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8080;
// database connection 
connectToDb();
//Express middlewares
app.use(express.json())
app.use(cors());
//Custom routes
app.use('/api/register', registerRoute);
app.use('/api/login', loginRoute);

//Starting the server
app.listen(port,()=>{
    console.log(`Server is running on http://127.0.0.1:${port}`)
})


