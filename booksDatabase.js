const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = async () => {
    try {
        console.log(`Connection with database has started`);
    
        await mongoose.connect(process.env.MONGO_URL)
    
        console.log(`Connection successfully established`);
    } catch (err) {
        console.log(err);
    }
}

module.exports = dbConnect;