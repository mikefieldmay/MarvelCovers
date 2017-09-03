import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicListComponent } from './comic-list.component';
import { DataService } from "app/comic/data-service.service";
import { Observable } from "rxjs";
import 'rxjs/Rx';
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ShortenPipe } from "app/common/shorten.pipe";

let comic = {
  'title': 'Awesome Comic',
  'images': [{
    'path': 'imagePath'
  }]};

class DataServiceStub {
  getComics() {
    return Observable.from([[comic]])
  }
};

describe('ComicListComponent', () => {
  let component: ComicListComponent;
  let fixture: ComponentFixture<ComicListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicListComponent, ShortenPipe ],
      providers: [
       { provide: DataService, useClass: DataServiceStub }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should hold an array of comics', () => {
    expect(component.comics).toEqual([comic]);
  });

  it('should render display comics returned from the server', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img')).toBeTruthy();
  }));

  describe('onInit', () => {

    it('should subscribe to the DataService', () => {
      let ds = new DataService(null);
      let comicList = new ComicListComponent(ds);
      spyOn(ds, 'getComics').and.callFake(() => {
        return Observable.from([comic]);});
      comicList.ngOnInit();
      expect(ds.getComics).toHaveBeenCalled();
    });
  });

});
