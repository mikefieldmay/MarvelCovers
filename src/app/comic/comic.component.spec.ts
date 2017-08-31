import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicComponent } from './comic.component';
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe('ComicComponent', () => {
  let component: ComicComponent;
  let fixture: ComponentFixture<ComicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
