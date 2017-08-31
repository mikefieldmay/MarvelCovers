import { Component, OnInit } from '@angular/core';
import { DataService } from "app/comic/data-service.service";
import { Comic } from "app/comic/comic.model";

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.css']
})
export class ComicListComponent implements OnInit {
  comics: Comic[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getComics()
      .subscribe(
        (comics: Comic[]) => {
          console.log(comics);
          this.comics = comics;
        }
      );
  }

}
