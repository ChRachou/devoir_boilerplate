//IMPORTS & CONFIG
    require('dotenv').config();
    const express = require('express');
    const bodyParser = require('body-parser');
    const cookieParser = require('cookie-parser');
    const port = process.env.PORT;
    const server = express();
    const { mainRouter } = require('./routes/main.router');
    const mongoDB = require('./services/db.connect');
    const path = require('path');
    const ejs = require('ejs');

    
    //CONF SERVER
    class ServerClass {

        
        init(){
            //=> Use path to add views
            server.engine( 'html', ejs.renderFile );
            server.set( 'view engine', 'html' );
          //  server.set( 'views', __dirname + '/www' );
          //  server.use( express.static(path.join(__dirname, 'www')) );

            // BODY PARSER 
            server.use(bodyParser.json({limit: '10mb'}));
            server.use(bodyParser.urlencoded({ extended: true }));

            //COOKIE PARSER
            server.use(cookieParser(process.env.COOKIE_SECRET));

            //ROUTER
            server.use('/', mainRouter);

            // FONCTION LANCEMENT SERVER
            this.launch();
        };

        // CONNEXION MONGO
        launch(){
            
            mongoDB.initClient()
            .then( mongooseResponse => {
                // LANCEMENT SERVER
                server.listen(port, () => console.log({ database: mongooseResponse, server: `http://localhost:${port}` }))
            })
            .catch( mongooseError => console.log(mongooseError));
        };
    };
//



/*
Start server
*/
    new ServerClass().init();
//