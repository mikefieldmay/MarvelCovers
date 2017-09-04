import { Component, OnInit, Input } from '@angular/core';
import { Comic } from 'app/comic/comic.model';

@Component({
  selector: 'app-comic-item',
  templateUrl: './comic-item.component.html',
  styleUrls: ['./comic-item.component.css']
})
export class ComicItemComponent implements OnInit {
  @Input() comic: Comic;
  hover = false;
  coverOpacity = 1;

  constructor() { }

  ngOnInit() {
  }

  onMouseEnter() {
    this.hover = true;
    this.coverOpacity = 0.4;
  }

  onMouseLeave() {
    this.hover = false;
    this.coverOpacity = 1;
  }

}
