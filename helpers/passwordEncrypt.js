const bcrypt = require('bcrypt');

exports.passwordEncryption = async (myPlaintextPassword) => {
    let passEncrypt = await bcrypt.hash(myPlaintextPassword, 10);
    return { ok:true, strongPassword: passEncrypt }
}

exports.checkUser = async (plainTextPassword, hashPassword) => {
    const match = await bcrypt.compare(plainTextPassword, hashPassword);
    return match;
}