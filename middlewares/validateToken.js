const jwt = require('jsonwebtoken')
const {SESSION_SECRET}  = require('../config/config');
const validateToken= async(req,res,next) => {
    let token = req.get('my-token');

    if(token === undefined){
        return res.status(400).json({
            ok: false,
            message: "You must send a token"
        });
    }

    try {
        let isValid = await jwt.verify(token, SESSION_SECRET);
        console.log('ESTE es el TOKEN')
        console.log(token)
        console.log('Is Valid: ', isValid)
        //if undefined
        console.log('TE GUSTó?')
    } catch (e) {
        console.log(e)
    }

    next()
}

module.exports = validateToken