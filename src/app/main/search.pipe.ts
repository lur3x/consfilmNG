import { Pipe, PipeTransform } from '@angular/core';
import { searchShow } from './interface';

@Pipe({
  name: 'searchShow',
})
export class SearchPipe implements PipeTransform {
  transform(shows: searchShow[], search = ''): searchShow[] {
    if (!search.trim()) {
      return shows;
    }
    return shows.filter((show) => {
      return show.title.toLowerCase().includes(search.toLowerCase());
    });
  }
}
