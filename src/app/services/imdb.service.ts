import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComingSoonShow, searchShow, Show } from '../main/interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImdbService {
  constructor(private http: HttpClient) {}

  getComingSoonShows() {
    return this.http.get<ComingSoonShow[]>(
      `https://imdb-api.com/en/API/ComingSoon/${environment.apiKey}`
    );
  }
  searchShow(name: string) {
    return this.http.get<searchShow>(
      `https://imdb-api.com/en/API/Search/${environment.apiKey}/${name}`
    );
  }
  getShowById(id: string) {
    return this.http.get<Show>(
      `https://imdb-api.com/en/API/Title/${environment.apiKey}/${id}`
    );
  }
}
