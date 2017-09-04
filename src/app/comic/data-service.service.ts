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
    const params = '?noVariants=true&limit=100&format=comic&title=avengers';
   return this._http.get(url + params + '&apikey=' + ApiKeys.public)
      .map(
        (response: Response) => {
          let comics = response.json().data.results;
          for (let comic of comics) {
            if (comic.images.length > 0 ) {
              this.createComic(comic);
            }
          }
          return this.comics.slice();
        },
      );
  }

  private getCreators(comic) {
    let creators = [];
    for(let creator of comic.creators.items) {
      creators.push(creator.name);
    }
    return creators;
  }

  private getCharacters(comic) {
    let characters = [];
    for(let character of comic.characters.items) {
      characters.push(character.name);
    }
    return characters;
  }

  private createComic(comic) {
    let title = comic.title;
    let image = `${comic.images[0]['path']}/detail.jpg`;
    let description = comic.description;
    let creators = this.getCreators(comic);
    let characters = this.getCharacters(comic);
    this.comics.push(
      new Comic(title, image, creators, description, characters)
    );
  }
}
