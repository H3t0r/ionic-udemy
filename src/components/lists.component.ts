import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { List } from '../models';
import { TasksService } from '../services/tasks.service';
import { NewListPage } from '../pages/new-list/new-list.component';

@Component({
  selector: 'app-lists',
  templateUrl: 'lists.component.html',
})
export class ListsComponent {
  @Input() isFinished: boolean;
  constructor(public tasks: TasksService, private ionNav: NavController) {}

  listSelected(list: List) {
    this.ionNav.push(NewListPage, { listName: list.title, list });
  }

  removeList(id: number) {
    this.tasks.removeList(id);
  }
}
