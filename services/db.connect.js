//IMPORT
const mongoose = require('mongoose')

//CONFIG
    const initClient = () => {
        return new Promise( (resolve, reject) => {
            mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
            .then( db => resolve( process.env.MONGO_URL ))
            .catch( error => reject(`MongoDB not connected`, error) )
        })
    }
 

//EXPORT
    module.exports = { initClient };
 