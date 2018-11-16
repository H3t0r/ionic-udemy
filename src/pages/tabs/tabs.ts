import { Component } from '@angular/core';

import { TodoPage } from '../todo/todo.component';
import { DonePage } from '../done/done.component';

@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root = TodoPage;
  tab2Root = DonePage;

  constructor() {}
}
