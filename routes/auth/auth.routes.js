//IMPORT
    const express = require('express');
    const authRouter = express.Router();
    const { sendBodyError, sendFieldsError, sendApiSuccessResponse, sendApiErrorResponse } = require('../../services/server.response');
    const { checkFields } = require('../../services/request.checker');
    const { register, login  } = require('./auth.controller');

//ROUTES
    class AuthRouterClass {
        routes(){

            // TEST
            authRouter.get( '/test', (req, res) => { 
                res.json('HATEOAS for auth')
            })

            // ENREGISTREMENT
            authRouter.post( '/register', (req, res) => {
                //Cre
                res.cookie('SESS-MCBA', 'John Doe', { signed: true, httpOnly: true });

                // Vérification du body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, 'Pas de donnée dans le body') }
                //Check si tous les champs sont renseigné
                const { miss, extra, ok } = checkFields(['email', 'password', 'first_name', 'last_name'], req.body);
                //Si il y a un problème sur les champs renseigné
                if (!ok) { sendFieldsError(res, 'Bad fields provided', miss, extra) }
                //Si tout va bien
                else{
                    register(req.body, res)
                    .then( apiResponse => sendApiSuccessResponse(res, 'User is registrated', apiResponse) )
                    .catch( apiResponse => sendApiErrorResponse(res, 'Error during user registration', apiResponse))
                }
            })

            // CONNEXION
            authRouter.post( '/login', (req, res) => {
                console.log(req.signedCookies['SESS-MCBA'])

                // Vérification du body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, 'No body data provided') }
                //Check si tous les champs sont renseigné
                const { miss, extra, ok } = checkFields(['email', 'password'], req.body);
                //Si il y a un problème sur les champs renseigné
                if (!ok) { sendFieldsError(res, 'Bad fields provided', miss, extra) }
                 //Si tout va bien
                else{
                    login(req.body, req)
                    .then( apiResponse => sendApiSuccessResponse(res, 'User is logged', apiResponse) )
                    .catch( apiResponse => sendApiErrorResponse(res, 'Error during user login', apiResponse))
                }
            }) 
        }

        init(){
            this.routes();
            return authRouter;
        }
    }

//EXPORT
    module.exports = AuthRouterClass; 