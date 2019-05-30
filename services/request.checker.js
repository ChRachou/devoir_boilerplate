//VERIFICATION
    const checkFields = (required, object) => {

        //INITIALISATION VARIABLE
            const miss = [];
            const extra = [];
        
        
        //S'il y a un champ qui manque
        required.forEach((prop) => {
            if (!(prop in object)) miss.push(prop);
        });
    
        // S'il y a un champ en plus
        for (const prop in object) {
            if (required.indexOf(prop) === -1) extra.push(prop);
        }
    
        //Si tout va bien 
        const ok = (extra.length === 0 && miss.length === 0);
        
        
        return { ok, extra, miss }; 
    };
 


//EXPORT
  module.exports = {
    checkFields,
  }; 