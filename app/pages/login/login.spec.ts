import {beforeEachProviders, it, describe, expect, inject} from '@angular/core/testing';
import {Alert, NavController} from 'ionic-angular';
import {LoginPage} from "./login";
import {provide} from '@angular/core';

beforeEachProviders(() => [LoginPage, provide(NavController, { useValue: LoginPage })]);

describe('Login Page', () => {
    it('should check if login objet is not null', inject([LoginPage], (login) => {
        expect(login).not.toBeNull();
    }));
 
    //ToDo Add more test cases...
});