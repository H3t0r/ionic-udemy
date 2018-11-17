import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-todo',
  templateUrl: 'todo.component.html',
})
export class TodoPage implements OnInit {
  constructor(public tasks: TasksService) {}

  ngOnInit() {}
}
