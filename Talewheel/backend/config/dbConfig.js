require('dotenv').config();
const mongoose = require('mongoose');

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_DB_URL).then(() => {
            console.log('Connected to MongoDB');
        });
    }
    catch(err){
        console.log(err);
    }
};

module.exports = { connect };