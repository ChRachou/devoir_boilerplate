/* 
Imports & definition 
*/
  // Imports
  import { Component, OnInit } from '@angular/core';

  // Inner
  import { IdentityModel } from '../../models/identity.model';
  import { GameModel } from '../../models/game.model';
  import { ApiResponseModel } from "../../models/api.reponse.model";
  import { AuthService } from "../../services/auth/auth-service.service";
  import { GameService } from "../../services/game/game-service.service";
   // Cookie service
  import { CookieService } from 'ngx-cookie-service';

  // Definition
  @Component({
    selector: 'app-user-page',
    templateUrl: './user-page.component.html',
    providers: [ AuthService, GameService, CookieService ]
  })
//


/* 
Export
*/
  export class UserPageComponent implements OnInit {
    user: IdentityModel[] = [];
    qtt = 0;
    time = 10;
    stop = false;
    first = true;
    data = {};
    games = {}
    public apiMessageLogin : String
    /* 
    Config.
    */
      // Module injection
      constructor(
        private AuthService: AuthService,
        private GameService: GameService,
        private cookieService: CookieService
      ) {};
    //


    /*
    Methods
    */
    //
    onClickMe() {
        if(this.first) {
            this.first = false;
            this.startGame();
            this.qtt++;
        
        } else {
            this.qtt++;
        }
    }

    onRestart() {
        this.qtt = 0;
        this.time = 10;
        this.stop = false;
        this.first = true;
    }

    startGame() {
        let id = setInterval( () => {
            if(this.time !== 0) {
                this.time--;
            } else {
                clearInterval(id)
                this.stop = true;
                
                let data = {
                    user : this.cookieService.get('userid'),
                    point : this.qtt,
                    time : new Date()
                }

                this.saveGame(data)
                this.getAll();
            }
            
        }, 1000)
    }

    public saveGame = (data : GameModel) => {
        // Send user data
        this.GameService.save(data)
        .then( (apiResponse: ApiResponseModel) => {
            // API success response
            this.apiMessageLogin = apiResponse.message;
            console.log('sucess :', this.apiMessageLogin); 
            this.getAll();   
        })
        .catch( (apiResponse: ApiResponseModel) => {
            // API error response
            this.apiMessageLogin = apiResponse.message;
            console.log('error :', this.apiMessageLogin)
        })
    };

    public getAll() {
        this.GameService.getGames().then((data) => {
           this.games = data.message;
        }) 
    };

    /* 
    Hooks
    */
    ngOnInit() {         
        this.getAll();
    };
    //
  }
//