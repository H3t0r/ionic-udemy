import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { List, Item } from '../../models';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-new-list',
  templateUrl: 'new-list.component.html',
})
export class NewListPage {
  list: List;
  item: Item;
  itemName: string;

  constructor(public task: TasksService, private ionParams: NavParams) {
    const title = this.ionParams.get('listName');
    const existingList = this.ionParams.get('list');

    if (existingList) {
      this.list = existingList;
    } else {
      this.list = new List(title);
      this.task.addList(this.list);
    }
  }

  addItem() {
    if (this.itemName.trim() === '') {
      return;
    }

    this.item = new Item(this.itemName);
    this.list.items.push(this.item);
    this.itemName = '';
    this.task.saveToStorage();
  }

  updateItem(item: Item) {
    item.isChecked = !item.isChecked;

    const todo = this.list.items.filter(i => !i.isChecked).length;

    if (todo === 0) {
      this.list.isFinished = true;
      this.list.finishedDate = new Date();
    } else {
      this.list.isFinished = false;
      this.list.finishedDate = null;
    }

    this.task.saveToStorage();
  }

  removeItem(i: number) {
    this.list.items.splice(i, 1);
    this.task.saveToStorage();
  }
}
