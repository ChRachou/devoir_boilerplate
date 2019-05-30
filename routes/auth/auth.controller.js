//IMPORT
const UserModel = require('../../models/user.model')
const bcrypt = require('bcryptjs');


//FONCTION

//Fonction:  enregistrement d'user
const register = (body, res) => {
    return new Promise( (resolve, reject) => {

        UserModel.findOne( { email: body.email }, (error, user) => {
            if(error) return reject(error) // ERROR MONGO
            else if(user) return reject('User déjà existant')
            else{
                //Cryptage password
                bcrypt.hash( body.password, 10 )
                .then( hashedPassword => {  
                    // Insertion du password crypté à l'user
                    body.password = hashedPassword;

                    // Enregistrement de l'user
                    UserModel.create(body)
                    .then( mongoResponse => resolve(mongoResponse) )
                    .catch( mongoResponse => reject(mongoResponse) )
                })
                .catch( hashError => reject(hashError) );
            };
        });
        
    });
};

//Fonction: connexion d'un user
const login = (body, req) => {
    return new Promise( (resolve, reject) => {
        UserModel.findOne( {email: body.email}, (error, user) =>{
            if(error) reject(error)
            else if(!user) reject('User inconnu')
            else{
                // Verification du password en le decryptant
                const validPassword = bcrypt.compareSync(body.password, user.password);
                if( !validPassword ) reject('Password est non valide')
                else resolve({
                    user: user,
                    token: user.generateJwt()
                })
            }
        } )
    })
}

 

//EXPORT
module.exports = {
    register,
    login, 
} 