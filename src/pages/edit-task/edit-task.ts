import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { TaskProvider } from '../../providers/task/task';

/**
 * Generated class for the EditTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-task',
  templateUrl: 'edit-task.html',
})
export class EditTaskPage {

  taskName: string;
  taskDescription: string;
  taskDueDate: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private taskProvider:TaskProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditTaskPage');
  }

  onCancel() {
    this.navCtrl.pop()
  }

  onSubmitForm(f: NgForm) {
    console.log(f.value);
    this.taskProvider.addNewTask(this.taskName, this.taskDescription, this.taskDueDate)
    this.navCtrl.pop();
  }
}
