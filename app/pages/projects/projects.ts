import {Component} from '@angular/core';
import {Alert, NavController, Storage, LocalStorage} from 'ionic-angular';
import {LoginPage} from '../login/login';
@Component({
  templateUrl: 'build/pages/projects/projects.html'
})
export class ProjectsPage {
  projects = new Storage(LocalStorage);
  projectList = [];
  isEmpty = true;
  constructor(public nav: NavController) {
    this.projects.clear();
  }

  addProject(){
    let prompt = Alert.create({
      title: 'Add New Project',
      message: "Enter a name for this new Project you're so keen on adding",
      inputs: [
        {
          name: 'Project Name',
          placeholder: 'Name'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            if(this.projects.get(data["Project Name"])["__zone_symbol__value"] === null){
              this.projects.set(data["Project Name"], data["Project Name"])
              this.projectList.push(data["Project Name"]);
              this.isEmpty = false;
            }
            else{
              this.promptDuplicateProject();
            }
          }
        }
      ]
    });
    this.nav.present(prompt);
  }

   promptDuplicateProject(){
      let duplicatePrompt = Alert.create({
      title: "Duplicate Project Name",
      message: "Project Name already exist."
    });
    this.nav.present(duplicatePrompt).then(test => duplicatePrompt.dismiss());
   }
}
