import {
  TestBed,
  getTestBed,
  fakeAsync,
  inject,
  tick
} from '@angular/core/testing';
import {
  Headers, BaseRequestOptions,
  Response, HttpModule, Http, XHRBackend, RequestMethod
} from '@angular/http';

import { ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { DataService } from './data-service.service';

describe('Data Service', () => {

  let comicOne = {
    'title': 'Awesome Comic',
    'images': [{
      'path': 'imagePath'
    }],
     'characters': {
      'items': [{'name': 'mike'}]
      },
      'creators': {
        'items': [{'name': 'mike'}]
        }
    };
  let comicTwo = {
    'title': 'Mega Comic',
    'images': [{
      'path': 'imagePath'
    }],
    'description': 'Super great comic',
    'characters': {
      'items': [{'name': 'mike'}]
      },
      'creators': {
        'items': [{'name': 'mike'}]
        }
    };
  let data = {
      data: {
      'results': [
        comicOne,
        comicTwo
    ]
  }
  };

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        DataService,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });

  describe('getComics()', () => {

    it('should return an Observable array of comics',
      inject([DataService, XHRBackend], (dataService, mockBackend) => {

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(data)
        })));
      });

      dataService.getComics().subscribe((response) => {
        expect(response.length).toBe(2);
      });

    }));

    it('should set comics to the returned comics',
      inject([DataService, XHRBackend], (dataService, mockBackend) => {

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(data)
        })));
      });

      dataService.getComics().subscribe((response: Response) => {
        expect(dataService.comics.length).toBe(2);
      });

    }));
  });
});
