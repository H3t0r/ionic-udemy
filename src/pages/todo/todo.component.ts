import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { List } from '../../models';

@Component({
  selector: 'app-todo',
  templateUrl: 'todo.component.html',
})
export class TodoPage {
  constructor(public tasks: TasksService) {}

  listSelected(list: List) {
    console.log(list);
  }
}
