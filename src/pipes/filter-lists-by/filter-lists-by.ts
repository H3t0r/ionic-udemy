import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../../models';

@Pipe({
  name: 'filterListsBy',
  pure: false,
})
export class FilterListsByPipe implements PipeTransform {
  transform(lists: List[], isFinished: boolean) {
    return lists.filter(l => l.isFinished === isFinished);
  }
}
