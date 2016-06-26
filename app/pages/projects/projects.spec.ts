import {beforeEachProviders, it, describe, expect, inject} from '@angular/core/testing';
import {ProjectsPage} from "./projects";
import {Alert, NavController} from 'ionic-angular';
import {provide} from '@angular/core';


beforeEachProviders(() => [ProjectsPage, provide(NavController, { useValue: ProjectsPage })]);


describe('Projects Page', () => {

 
    it('should be null',  () => {
            let projects = null;
            expect(projects).toBeNull;
        }),

    it('should NOT be null',  inject([ProjectsPage], (project) => {
            let projects = project;
            expect(projects).not.toBeNull;
        }))

 
      //ToDo Add more test cases...
 
});