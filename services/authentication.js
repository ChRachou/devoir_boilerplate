//IMPORT
    const JwtStrategy = require('passport-jwt').Strategy;
    const { ExtractJwt } = require('passport-jwt');
    const UserModel = require('../models/user.model');

//SERVICE

    // JWT AUTHENTIFICATION
    const authJwt = (passport) => {

        // OPTION JWT
        const opts = {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET,
        };
        
        // STATEGY JWT
        passport.use(new JwtStrategy(opts, (jwtPayload, done) => {
            UserModel.findOne({ _id: jwtPayload._id }, (err, user) => {
                if (err) { return done(err, false)}
                if (user) { return done(null, user) }
                else { return done(null, false) }
            });
        }));
    };

//EXPORT
    module.exports = {
        setAuthentication: (passport) => {
            authJwt(passport);
        },
    };