import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { List } from '../../models';

@Component({
  selector: 'app-new-list',
  templateUrl: 'new-list.component.html',
})
export class NewListPage {
  list: List;

  constructor(private ionParams: NavParams) {
    const title = this.ionParams.get('listName');
    this.list = new List(title);
  }
}
