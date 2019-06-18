/* 
Definition
The object Model{} is used in main.controller
You need to add a new propetry for each Mongoose schema
*/
    const Models = {
        identity: require('../models/identity.model'),
        game : require('../models/game.model')
    };
//

/* 
Export
*/
    module.exports = Models;
//