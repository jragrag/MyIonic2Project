import {FORM_DIRECTIVES, FormBuilder, Validators, Control, ControlGroup} from '@angular/common';
import {Component} from '@angular/core';
import {Alert, NavController} from 'ionic-angular';
import {ProjectsPage} from '../projects/projects';

@Component({
  templateUrl: 'build/pages/login/login.html',
  providers: [FormBuilder]
})
export class LoginPage {
  form;
  

  constructor(public nav: NavController) {
    this.form = new ControlGroup({
      email: new Control("", Validators.required),
      password: new Control("", Validators.required)
    });
  }

  processForm(input) {
    let title = 'Ooops...';
    let message = 'Passwords must at least have 4 chars...';

    if(input.password.length >= 4){
        title = 'Awesome!';
        message = 'Have a good day  ~';
    }

    let alert = Alert.create({
      title: title,
      message: message,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            if(title === "Awesome!")
              this.nav.push(ProjectsPage);
          }
        }]
    });

    this.nav.present(alert);
  }
}
