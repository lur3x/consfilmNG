import { Component, OnInit } from '@angular/core';
import { ImdbService } from '../../services/imdb.service';
import { searchShow } from '../interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchStr = '';
  shows: searchShow[] = [];

  constructor(private imdb: ImdbService) {}

  search(str: string) {
    return this.imdb.searchShow(str).subscribe((shows: any) => {
      this.shows = shows['results'];
    });
  }

  ngOnInit() {}
}
