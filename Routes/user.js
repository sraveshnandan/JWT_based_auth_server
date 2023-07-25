const router = require('express').Router();
const { validate, user } = require('../models/user');
const bcrypt = require('bcrypt');
router.post('/', async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error) {
            res.status(400).send({ message: error.details[0].message })
        }
        const user01 = await user.findOne({ email: req.body.email });
        if (user01) {
            res.status(409).send({ message: " User with same Email already exists" })
        }
        else { // This is causing server crash problem because i havn't used else block
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            await new user({ ...req.body, password: hashedPassword }).save();
            res.status(200).send({ message: "User Created Successfully." })
        }

    } catch (error) {
        res.status(500).send({
            message: `Internal Server Error. ${error} `
        })
    }
})
module.exports = router;
