const GameModel = require('../../models/game.model')

const save = body => {
    return new Promise( (resolve, reject) => {
        GameModel.create(body).catch( mongoResponse => reject(mongoResponse))
    });
};

const getAllGames = userId => {    
    return new Promise( (resolve, reject) => {       
        GameModel.find( { user : userId }, (error, user) => {
            if(error) return reject(error)
            else if(!user) return reject('Unknow identity')
            else {  return resolve(user) }
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