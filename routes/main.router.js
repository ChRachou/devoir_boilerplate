//IMPORT
    const { Router } = require('express');
    const AuthRouterClass = require('./auth/auth.routes');


//SECURISER LES CONNEXIONS UTILISATEURS & JWT
    const passport = require('passport');
    const { setAuthentication } = require('../services/authentication');
    setAuthentication(passport);


//ROUTER
    const mainRouter = Router();
    const apiRouter = Router();
    
    const authRouter = new AuthRouterClass();  

//CONFIG ROUTES
    mainRouter.use('/api', apiRouter);
    apiRouter.use('/auth', authRouter.init()); 

//EXPORT
    module.exports = { mainRouter };
 