const GameModel = require('../../models/game.model')

const save = body => {
    return new Promise( (resolve, reject) => {
        GameModel.create(body).catch( mongoResponse => reject(mongoResponse))
    });
};

const getAllGames = userId => {    
    return new Promise( (resolve, reject) => {       
        GameModel.find( { user : userId }, (error, games) => { 
            if(error) return reject(error)
            else if(!userId) return reject('User inconnu')
            else {  return resolve(games) }
        } )
    });
}

/*
Export
*/
module.exports = {
    save,
    getAllGames
}
//