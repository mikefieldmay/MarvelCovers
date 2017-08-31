import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicListComponent } from './comic-list.component';
import { DataService } from "app/comic/data-service.service";
import { Observable } from "rxjs";
import 'rxjs/Rx';

let comic = {
  'title': 'Awesome Comic',
  'images': [{
    'path': 'imagePath'
  }]};

class DataServiceStub {
  getComics() {
    return Observable.from([comic])
  }
};

describe('ComicListComponent', () => {
  let component: ComicListComponent;
  let fixture: ComponentFixture<ComicListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicListComponent ],
      providers: [
       { provide: DataService, useClass: DataServiceStub }
      ]
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
    expect(component.comics).toEqual(comic);
  })

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
