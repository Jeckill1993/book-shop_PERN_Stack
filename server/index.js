require('dotenv').config();
const express = require('express');
const sequelize = require('./database');
const models = require('./models/models');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');

const PORT = process.env.PORT || 5000;


const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use('/api', router);


// processing errors, must be last middleware
app.use(errorHandler);

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

