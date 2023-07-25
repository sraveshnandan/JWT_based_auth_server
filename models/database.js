
const mongoose = require('mongoose');
module.exports = connectToDb = ()=>{
    conPrams ={
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
    try {
        mongoose.connect(process.env.DB_URL, conPrams)
        console.log("Connected to the database")
    } catch (error) {
        console.log("Unable to connect to the database"+ error)
    }
}