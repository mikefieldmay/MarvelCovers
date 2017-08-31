import { Response,   Http} from '@angular/http';
import { Injectable } from '@angular/core';
import { Comic } from 'app/comic/comic.model';
import { ApiKeys } from '../api.config';
import 'rxjs/Rx';

@Injectable()
export class DataService {
  public comics: Comic[] = [];

  constructor(private _http: Http) { }

  getComics() {
    const url = 'https://gateway.marvel.com:443/v1/public/comics';
    const params = '?noVariants=true&limit=10&';
   return this._http.get(url + params + ApiKeys.public)
      .map(
        (response: Response) => {
          const comics = response.json().results;
          for (let comic of comics) {
            this.comics.push(
              new Comic(comic.title, `${comic.images[0]}/detail.jpg`)
            );
          }
          return this.comics;
        }
      );
  }
}
