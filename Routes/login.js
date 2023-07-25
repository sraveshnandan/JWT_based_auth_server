const router = require('express').Router();
const { user } = require('../models/user');
// const joi = require('joi');
// const passwordComplexity = require('joi-password-complexity')
const bcrypt = require('bcrypt');
                                /*
                                These all comments are causing maximum call stack error 
                                */
// const validatelogin = (data) => {
//     let schema = joi.object({
//         email:joi.string().email().required().label("email"),
//         password:passwordComplexity().required().label("password"),
//     })
//     return validatelogin(data)
// }

router.post('/', async (req, res) => {
    try {
        // const error = validatelogin(req.body);
        // if (error) {
        //     return res.status(400).send({
        //         message: error.details[0].message
        //     })
        // }
        const user01 = await user.findOne({ email: req.body.email });
        if (!user01) {
            return res.status(401).send({
                message: "Invalid email or password"
            })
        }
        const validpass = await bcrypt.compare(req.body.password, user01.password);
        if (!validpass) {
            res.status(401).send({
                message: `Invalid email or password ${error}`
            })
        }
        const token = user01.generateAuthToken();
        res.status(200).send({
            message: "Auth succsefull", token: token
        })

    } catch (error) {
        res.status(500).send({
            message: `Internal Server Error! ${error}`
        })

    }
})
module.exports = router;