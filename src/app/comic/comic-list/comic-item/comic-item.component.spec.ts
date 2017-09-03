import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicItemComponent } from './comic-item.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Comic } from 'app/comic/comic.model';

describe('ComicItemComponent', () => {
  let component: ComicItemComponent;
  let fixture: ComponentFixture<TestComponentWrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponentWrapper,
        ComicItemComponent ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponentWrapper);
    component = fixture.debugElement.children[0].componentInstance;;
    fixture.detectChanges();
  });

  describe('When created', () => {

    it('should be created', () => {
      expect(component).toBeTruthy();
    });

    it('has the property hover set to false', () => {
      expect(component.hover).toBe(false);
     });

    it('should have a comic property', () => {
      expect(component.comic).toBeTruthy();
    });

    it('should display comics', async(() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('img')).toBeTruthy();
    }));

  });

  describe('onMouseEnter', () => {

    xit('onMouseEnter is called when a mouse hovers over element', () => {
      let element = fixture.nativeElement;
      let component = fixture.debugElement.children[0].componentInstance;;;
      let spy = spyOn(component, 'onMouseEnter');
      let imgEl = element.querySelector('.work-img');
      let event = new Event('mouseenter');
      imgEl.dispatchEvent(event);
      expect(spy).toHaveBeenCalled();

    });

    it('turns the hover state to true', () => {
      let component = fixture.debugElement.children[0].componentInstance;;;
      component.onMouseEnter();
      expect(component.hover).toEqual(true);
    })

  });

  describe('onMouseLeave', () => {

    xit('onMouseLeave is called when a mouse leaves the element', () => {
      let element = fixture.nativeElement;
      let component = fixture.debugElement.children[0].componentInstance;
      let spy = spyOn(component, 'onMouseLeave');
      let imgEl = element.querySelector('.work-img');
      let event = new Event('mouseleave');
      imgEl.dispatchEvent(event);
      expect(spy).toHaveBeenCalled();

    });

    it('returns the hover state to false when the mouse leaves', () => {
      let component = fixture.debugElement.children[0].componentInstance;
      component.onMouseEnter();
      component.onMouseLeave();
      expect(component.hover).toEqual(false);
    });

  });

  describe('hoverState', () => {

    it('the title is displayed when the image is in hover state', () => {
        const compiled = fixture.debugElement.nativeElement;
        component.hover = true;
        fixture.detectChanges();
        expect(compiled.querySelector('h2')).toBeTruthy();
    });

    it('the title isnt displayed when the image is in hover state', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h2')).toBeFalsy();
    });
  });

});

@Component({
  selector: 'test-component-wrapper',
  template: '<app-comic-item [comic]="comic"></app-comic-item>'
})
class TestComponentWrapper {
  comic = new Comic('Awesome Comic', 'imagePathUrl');
}

