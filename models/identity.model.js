//IMPORT
    const mongoose = require('mongoose')
    const { Schema } = mongoose; 
    const jwt = require('jsonwebtoken');
//

//DEFINITION MONGOOSE
    const identitySchema = new Schema({
        email: String,
        password: String,
        isValidated: Boolean,
        creationDate: String,
        lastConnection: String
    })

//METHODE
    identitySchema.methods.generateJwt = idUser =>{
        // The access token expired in 60 days
        const expiry = new Date();
        expiry.setDate(expiry.getDate() + 59);

        /**
         * JWT sign() method
         * @param object => all the data nedded for the access token
         * @param JWT_SECRET => secure key to hash the access token (cf. '.env')
         * @return => hashed user access token
        */
            return jwt.sign({
                _id: idUser,
                isValidated: this.password,
                creationDate: this.creationDate,
                lastConnection: this.lastConnection,
                expireIn: '10s',
                exp: parseInt(expiry.getTime() / 100, 10)
            }, process.env.JWT_SECRET );
        //
    }

//EXPORT
    const IdentityModel = mongoose.model('identity', identitySchema);
    module.exports = IdentityModel;
 