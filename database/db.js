const mongoose = require("mongoose")
const config = require("../config/config")
// console.log(config)
s = "mongodb+srv://shubhambhole68:bhole123@demoapp1.ha5dqz2.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(s).then(() => {

    console.log("database connection is established")
}).catch((err) => {
    console.log("error while connecting in database", err)
})