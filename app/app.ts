import {Component, ViewChild} from '@angular/core';
import {ionicBootstrap, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {LoginPage} from './pages/login/login';
import {ProjectsPage} from './pages/projects/projects';


@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  constructor() {
  }
}

ionicBootstrap(MyApp);
