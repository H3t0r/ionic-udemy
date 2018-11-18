import { Injectable } from '@angular/core';
import { List } from '../models';

@Injectable()
export class TasksService {
  lists: List[] = [];

  constructor() {
    const savedLists = localStorage.getItem('lists');

    if (savedLists) {
      this.lists = JSON.parse(savedLists);
    }
  }

  addList(newLlist: List) {
    this.lists.push(newLlist);
    this.saveToStorage();
  }

  removeList(id: number) {
    this.lists = this.lists.filter(l => id !== l.id);
    this.saveToStorage();
  }

  saveToStorage() {
    const jsonLists = JSON.stringify(this.lists);
    localStorage.setItem('lists', jsonLists);
  }
}
