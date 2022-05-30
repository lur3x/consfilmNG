import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { ImdbService } from '../../services/imdb.service';
import { Show } from '../interface';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
})
export class PostPageComponent implements OnInit {
  show$!: Observable<Show>
  constructor(private imdb: ImdbService, private route: ActivatedRoute) {}

  ngOnInit(){
    this.show$= this.route.params.pipe(switchMap((params:Params)=>{
      return this.imdb.getShowById(params['id'])
    }))
  }
}
