const mongoose = require('mongoose');
const {
    MONGO_IP,
    MONGO_NAME,
    MONGO_PASSWORD,
    MONGO_PORT,
    MONGO_AUTH
} = require("../config/config");

console.log('Variables de entorno')
console.log(MONGO_IP,
    MONGO_NAME,
    MONGO_PASSWORD,
    MONGO_PORT,
    MONGO_AUTH)

const mongoURL = `mongodb://${MONGO_NAME}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=${MONGO_AUTH}`;

const connectDB = () => {
    mongoose.connect(mongoURL, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=> console.log("database conection successfull"))
    .catch((error)=> {
        console.log('There seems to be an error');
        console.log(error);
    })
}

module.exports = {
    dbConnection: connectDB
};