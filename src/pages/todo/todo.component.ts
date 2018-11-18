import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { List } from '../../models';
import { NavController, AlertController } from 'ionic-angular';
import { NewListPage } from '../new-list/new-list.component';

@Component({
  selector: 'app-todo',
  templateUrl: 'todo.component.html',
})
export class TodoPage {
  constructor(
    public tasks: TasksService,
    private ionNav: NavController,
    private ionAlert: AlertController
  ) {}

  listSelected(list: List) {
    this.ionNav.push(NewListPage, { listName: list.title, list });
  }

  addNewList() {
    const newListAlert = this.ionAlert.create({
      title: 'Create new list',
      message: 'Give a name to your list below.',
      inputs: [
        {
          name: 'listName',
          placeholder: 'List name...',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Add',
          handler: input => {
            if (input.listName.trim() === '') {
              return;
            }

            this.ionNav.push(NewListPage, { listName: input.listName });
          },
        },
      ],
    });

    newListAlert.present();
  }
}
