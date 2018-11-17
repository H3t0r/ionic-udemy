import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { List } from '../../models';

@Component({
  selector: 'app-done',
  templateUrl: 'done.component.html',
})
export class DonePage {
  constructor(public tasks: TasksService) {}

  listSelected(list: List) {
    console.log(list);
  }
}
