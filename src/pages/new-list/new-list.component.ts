import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { List, Item } from '../../models';

@Component({
  selector: 'app-new-list',
  templateUrl: 'new-list.component.html',
})
export class NewListPage {
  list: List;
  item: Item;
  itemName: string;

  constructor(private ionParams: NavParams) {
    const title = this.ionParams.get('listName');
    this.list = new List(title);
  }

  addItem() {
    if (this.itemName.trim() === '') {
      return;
    }

    this.item = new Item(this.itemName);
    this.list.items.push(this.item);
    this.itemName = '';
  }

  updateItem(item: Item) {
    item.isChecked = !item.isChecked;
  }

  removeItem(i: number) {
    this.list.items.splice(i, 1);
  }
}
