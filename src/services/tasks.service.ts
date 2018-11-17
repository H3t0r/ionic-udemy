import { Injectable } from '@angular/core';
import { List } from '../models';

@Injectable()
export class TasksService {
  lists: List[] = [];

  constructor() {
    const list_1 = new List('Infinity stones.');
    const list_2 = new List('Heroes to defeat.');

    this.lists.push(list_1, list_2);
    console.log(this.lists);
  }
}
