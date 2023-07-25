const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const joi = require('joi');
const passwordComplaxity = require('joi-password-complexity');

const userSchema =new  mongoose.Schema({
    firstName:{type : String, required:true},
    lastName:{ type : String, required:true },
    email:{type: String, required:true},
    password:{type: String, required:true},


})
userSchema.methods.generateAuthToken = ()=>{
    const token = jwt.sign({_id:this.id},process.env.JWT_PRIVET_KEY,{expiresIn:"7d"})
    return token
}
const user = new mongoose.model('user', userSchema);

const validate = (data)=>{
    let schema= joi.object({
        firstName:joi.string().required().label("First Name"),
        lastName:joi.string().required().label("Last Name"),
        email:joi.string().email().required().label("email"),
        password:passwordComplaxity().required().label("password"),
    })
    return schema.validate(data)
}
const validatelogin = (data)=>{
    let schema= joi.object({
        email:joi.string().email().required().label("email"),
        password:passwordComplaxity().required().label("password"),
    })
    return schema.validatelogin(data)
}
module.exports={user, validate, validatelogin}