/*
Imports
*/
    // Node
    const express = require('express');
    const gameRouter = express.Router();

    // Inner
    const { sendBodyError, sendFieldsError, sendApiSuccessResponse, sendApiErrorResponse } = require('../../services/response.service');
    const { checkFields } = require('../../services/request.service');
    const { save, getAllGames } = require('./game.controller')
    
    
//

class GameRouterClass { 

    routes() {
       
        gameRouter.post( '/', (req, res) => {            
            save(req.body)
            .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
            .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse))
        });

        gameRouter.get( '/:id', (req, res) => {                  
            getAllGames(req.params.id)
            .then( apiResponse => sendApiSuccessResponse(res, apiResponse) )
            .catch( apiResponse => sendApiErrorResponse(res, apiResponse))
        });

    }

     // Start router
     init(){
        // Get route fonctions
        this.routes();

        // Sendback router
        return gameRouter;
    };

}

module.exports =  GameRouterClass;