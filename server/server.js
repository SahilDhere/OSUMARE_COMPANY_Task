const express = require('express');

const app = express();

const dotenv = require('dotenv')
dotenv.config();

const port = process.env.PORT || 3000;

app.use(express.json())
app.use('/tasks', require('./routes/Todo.js'))


app.listen(port, ()=>{
    console.log(`server is running at port ${port}`)
})
