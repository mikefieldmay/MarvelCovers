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
    const params = '?noVariants=true&limit=100&';
   return this._http.get(url + params + '&apikey=' + ApiKeys.public)
      .map(
        (response: Response) => {
          let comics = response.json().data.results;
          for (let comic of comics) {
            if (comic.images.length > 0 ) {
              this.comics.push(
                new Comic(comic.title, `${comic.images[0]['path']}/detail.jpg`)
              );
            }
          }
          return this.comics.slice();
        },
      );
  }
}
