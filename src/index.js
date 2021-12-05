const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome');
});

const toDoRouter = require('./router/todos');
app.use('/todos', toDoRouter);

app.get('*', (req, res) => { 
    res.status(404).send('PAGE NOT FOUND!'); 
});

app.listen(3000);
