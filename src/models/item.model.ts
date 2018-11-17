export class Item {
  description: string;
  isChecked: boolean;

  constructor(description: string) {
    this.description = description;
    this.isChecked = false;
  }
}
