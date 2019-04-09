import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Task } from '../../interfaces/task';
import { P } from '@angular/core/src/render3';

/*
  Generated class for the TaskProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TaskProvider {

  taskList: Task[]

  constructor(private storage: Storage) {
    // this.taskList = [
    //   {
    //     name: 'Grocery Shopping',
    //     description: 'buy oranges, buy oranges, buy oranges ,buy oranges , buy oranges',
    //     dueDate: '2019-04-09',
    //     status: 0
    //   },
    //   {
    //     name: 'House Keeping',
    //     description: 'vacuum',
    //     dueDate: '2019-04-10',
    //     status: 0
    //   },
    //   {
    //     name: 'Wash car',
    //     description: 'wash car',
    //     dueDate: '2019-04-08',
    //     status: 1
    //   }
    // ]
  }

  loadPreviousTasks() {
    return new Promise((resolve, reject) => {
      this.loadFromStorage('task').then(json => {
        if(json) {
          this.taskList = <Task[]> json
        }else {
          this.taskList = []
        }
        resolve()
      })
    })
  }

  loadFromStorage(name: string) {
    return new Promise((resolve, reject) => {
      this.storage.get(name).then((json) => {
        if (json) {
          resolve (json);
        } else {
          resolve ();
        }
      });
    });
  }

  saveToStorage(name: string, json: any) {
    return new Promise((resolve, reject) => {
      this.storage.set(name, json).then(() => {
        resolve (true);
      });
    });
  }

  addNewTask(name:string, description:string, dueDate:string) {
    this.taskList.push({
      name: name,
      description: description,
      dueDate: dueDate,
      status: 0
    })
    this.saveToStorage('task', this.taskList)
  }

  updateTasks(taskList: Task[]) {
    this.saveToStorage('task', taskList)
  }
}
