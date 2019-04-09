import { Injectable } from '@angular/core';

@Injectable()

export class AppConfig {

  

    private _config: { [key: string]: string };
    public baseURL: string;

    constructor() {

        this._config = { 

            // PathAPI: 'http://localhost:50498/api/'
            PathAPI : "https://school-project-de37a.firebaseio.com"

        };

        //this.baseURL= "https://school-project-de37a.firebaseio.com";
        this.baseURL = "https://localhost:44310/api/";

    }

    get setting():{ [key: string]: string } {

        return this._config;

    }

    get(key: any) {

        return this._config[key];

    }
    getBaseUrl(){
        return this.baseURL;
    }

};