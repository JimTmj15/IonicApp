import { Component } from '@angular/core';
import { NavController, ItemSliding, Platform } from 'ionic-angular';
import { EditTaskPage } from '../edit-task/edit-task';
import { TaskProvider } from '../../providers/task/task';
import { Task } from '../../interfaces/task';
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  editTaskPage = EditTaskPage

  taskList: Task[]

  constructor(
    public navCtrl: NavController,
    private taskProvider: TaskProvider,
    private localNotification: LocalNotifications) {
    this.taskProvider.loadPreviousTasks().then(() => {
      this.taskList = this.taskProvider.taskList
    })
    // this.localNotification.schedule({
    //   id: 1,
    //   text: 'hello world',
    //   data: { myData: 'Hello le' },
    //   trigger: { at: new Date(new Date().getTime() + 5 * 1000) }
    // })
  }

  onCompleteTask(task: any, slidingItem: ItemSliding, position: number) {
    this.taskList[position].status = 1
    this.taskProvider.updateTasks(this.taskList)
    task.status = 1
    slidingItem.close()
  }

  // onCreateNewTask() {
  //   this.navCtrl.push(EditTaskPage)
  // }

}
