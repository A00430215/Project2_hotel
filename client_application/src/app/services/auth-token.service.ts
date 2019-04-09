import { Injectable } from '@angular/core';
import { AuthToken } from '../models/auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

  public authToken: AuthToken;

  constructor() 
    { 

    }

    setAuthToken(authToken: string){
        this.authToken.authToken = authToken;
    }
    
    getAuthToken(){
        return this.authToken.authToken;
    }
}
