import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Subject } from 'rxjs';

@Injectable()

export class Helpers  {

    private authenticationChanged = new Subject<boolean>();

    constructor() {

       

    }

    public isAuthenticated():boolean {

        return (!(window.localStorage['token'] === undefined || 

            window.localStorage['token'] === null ||

            window.localStorage['token'] === 'null' ||

            window.localStorage['token'] === 'undefined' ||

            window.localStorage['token'] === ''));

    }

    public isAuthenticationChanged():any {

        return this.authenticationChanged.asObservable();

    }

    public getToken():any {

        if( window.localStorage['token'] === undefined || 

            window.localStorage['token'] === null ||

            window.localStorage['token'] === 'null' ||

            window.localStorage['token'] === 'undefined' ||

            window.localStorage['token'] === '') {

            return '';

        }

        let obj = window.localStorage['token'];

        return obj;

    }

    public setToken(data:any):void {

        this.setStorageToken(data);

    }

    public failToken():void {

        this.setStorageToken(undefined);

    }

    public logout():void {

        this.setStorageToken(undefined);
        this.setCustomerData(undefined);

    }

    private setStorageToken(value: any):void {

        window.localStorage['token'] = value;

        this.authenticationChanged.next(this.isAuthenticated());

    }

    public setCustomerData(customer: any):void {

        window.localStorage['customer'] = JSON.stringify(customer);


    }

    public getCustomerData():any {

        if( window.localStorage['customer'] === undefined || 

        window.localStorage['customer'] === null ||

        window.localStorage['customer'] === 'null' ||

        window.localStorage['customer'] === 'undefined' ||

        window.localStorage['customer'] === '') {

        return '';

    }

    let obj = JSON.parse(window.localStorage['customer']);

    return obj;


    }
}