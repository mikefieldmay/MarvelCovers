import {Response, Http} from '@angular/http';
import { Injectable } from '@angular/core';
import { Comic } from 'app/comic/comic.model';
import 'rxjs/Rx';

@Injectable()
export class DataService {
  public comics: Comic[] = [];

  constructor(private _http: Http) { }

  getComics() {
   return this._http.get('')
      .map(
        (response: Response) => {
          const comics = response.json().results;
          for (let comic of comics) {
            console.log(comic.images[0].path);

            this.comics.push(
              new Comic(comic.title, `${comic.images[0]}/detail.jpg`)
            )
          }
          return this.comics;
        }
      );
  }
}
