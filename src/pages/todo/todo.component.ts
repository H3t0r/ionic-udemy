import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { List } from '../../models';
import { NavController } from 'ionic-angular';
import { NewListPage } from '../new-list/new-list.component';

@Component({
  selector: 'app-todo',
  templateUrl: 'todo.component.html',
})
export class TodoPage {
  constructor(public tasks: TasksService, private nav: NavController) {}

  listSelected(list: List) {
    console.log(list);
  }

  addNewList() {
    this.nav.push(NewListPage);
  }
}
