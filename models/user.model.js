//IMPORT
    const mongoose = require('mongoose')
    const { Schema } = mongoose;
    const jwt = require('jsonwebtoken');

    
//DEFINITION
    const userSchema = new Schema({
        first_name: String,
        last_name: String,
        email: String,
        password: String
    })


//METHODE
    userSchema.methods.generateJwt = function  generateJwt(){
        // expiration 
        const expiry = new Date();
        expiry.setDate(expiry.getDate() + 59);

        // création JWT
        return jwt.sign({
            _id: this._id,
            email: this.email,
            password: this.password,
            expireIn: '10s',
            exp: parseInt(expiry.getTime() / 100, 10)
        }, process.env.JWT_SECRET )
    }

//EXPORT
    const UserModel = mongoose.model('user', userSchema);
    module.exports = UserModel;
 