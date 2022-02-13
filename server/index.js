require('dotenv').config();
const express = require('express');
const sequelize = require('./database');
const models = require('./models/models');
const cors = require('cors');
const router = require('./routes/index');

const PORT = process.env.PORT || 5000;


const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

const start = async () => {  //all calls to databases are asynchronous
    try {

        await sequelize.authenticate(); //connect to database
        await sequelize.sync();

        app.listen(PORT, () => {
            console.log(`Server was started on port ${PORT}`);
        })

    } catch (e) {
        console.log(e);
    }
}

start();

