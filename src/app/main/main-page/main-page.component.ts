import { Component, OnInit } from '@angular/core';
import { ComingSoonShow } from '../interface';
import { ImdbService } from '../../services/imdb.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  items: ComingSoonShow[] = [];
  constructor(private imdb: ImdbService) {}

  ngOnInit() {
    this.imdb.getComingSoonShows().subscribe((items: any) => {
      this.items = items['items'];
      console.log(items);
    });
  }
}
