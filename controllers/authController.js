const User = require('../models/userModel');
const passwordManager = require('../helpers/passwordEncrypt');
const createToken = require('../helpers/jwtHelper');

exports.signUp = async(req, res) => {
    try {
        const { userName, password } = req.body;

        const userExist = await User.findOne({"userName": userName})

        if(userExist === !null) {
            return res.status(400).json({
                ok: false,
                messaje: "User exists",
            })
        }
        
        
        const { ok, strongPassword } = await passwordManager.passwordEncryption(password);
        
        if(ok !== true) return res.json({ok:false})

        
        const user = await User.create({userName, password: strongPassword})

        let token = await createToken(user);

        res.status(200).json({
            ok: true,
            messaje: "User created successfully",
            data: {
                user,
                token
            }
        });
    } catch (error) {
        console.log('error en catch')
        console.log(error)
        res.status(400).json({
            ok: false,
            messaje: "Error in catch",
        })
    }
}

exports.login = async (req,res) => {
    try {
        const { userName, password } = req.body;

        const user = await User.findOne({userName})
        if(user===null) {
            return res.status(400).json({
                ok: false,
                messaje: "User not found",
            })
        }

        const compare = await passwordManager.checkUser(password, user.password)

        if(compare===false){
            return res.status(400).json({
                ok: false,
                messaje: "Wrong password",
            })
        }

        let token = await createToken(user);

        res.status(200).json({
            ok: true,
            messaje: "User founded",
            data: {
                user,
                token
            }
        });
    } catch (error) {
        console.log('error en catch')
        console.log(error)
        res.status(400).json({
            ok: false,
            messaje: "Error in catch",
        })
    }
}

//ONly for tests
exports.tokenWorks = async (req,res) => {
    res.status(200).json({
        ok:true,
        messaje: "Your token in correct"
    })
}