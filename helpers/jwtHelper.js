const jwt = require('jsonwebtoken');

const {SESSION_SECRET}  = require('../config/config');

const createToken = async (data) => {
    const token = await jwt.sign(JSON.stringify(data), SESSION_SECRET);
    return token;
}

module.exports = createToken;