import { Item } from './item.model';

export class List {
  id: number;
  title: string;
  creationDate: Date;
  finishedDate: Date;
  isFinished: boolean;
  items: Item[];

  constructor(title: string) {
    this.title = title;
    this.creationDate = new Date();
    this.isFinished = false;
    this.items = [];
    this.id = this.creationDate.getTime() + Math.floor(Math.random() * 100 + 1);
  }
}
