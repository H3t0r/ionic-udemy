import { Component, Input } from '@angular/core';
import { NavController, AlertController, ItemSliding } from 'ionic-angular';
import { List } from '../models';
import { TasksService } from '../services/tasks.service';
import { NewListPage } from '../pages/new-list/new-list.component';

@Component({
  selector: 'app-lists',
  templateUrl: 'lists.component.html',
})
export class ListsComponent {
  @Input() isFinished: boolean;

  constructor(
    public tasks: TasksService,
    private ionNav: NavController,
    private ionAlert: AlertController
  ) {}

  listSelected(list: List) {
    this.ionNav.push(NewListPage, { listName: list.title, list });
  }

  removeList(id: number) {
    this.tasks.removeList(id);
  }

  renameList(list: List, item: ItemSliding) {
    item.close();
    const newListAlert = this.ionAlert.create({
      title: 'Rename list',
      message: 'Change the name of the list below',
      inputs: [
        {
          name: 'listName',
          placeholder: 'List name...',
          value: list.title,
        },
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Update',
          handler: input => {
            if (input.listName.trim() === '') {
              return;
            }

            list.title = input.listName;
            this.tasks.saveToStorage();
          },
        },
      ],
    });

    newListAlert.present();
  }
}
