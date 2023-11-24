const express = require('express');
const app = express();
const cors = require('cors');
const DB = require('./config/dbConfig');
const { registerUser, loginUser, getUser, updateUser, deleteUser } = require('./controller/userController');
const validateToken = require('./middleware/validatetokenHandler');
const PORT = process.env.PORT || 2018;

app.use(cors());
app.use(express.json());

DB.connect();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/user/create', registerUser);

app.post('/user/login', loginUser);

app.get('/user/current', validateToken ,getUser);

app.listen(PORT, () => { `Server is running on port ${PORT}` });