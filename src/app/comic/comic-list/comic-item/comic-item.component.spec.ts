import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicItemComponent } from './comic-item.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Comic } from 'app/comic/comic.model';

describe('ComicItemComponent', () => {
  let component: ComicItemComponent;
  let fixture: ComponentFixture<TestComponentWrapper>;
  let defaultOpacity = 1;

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

     it('has a default coverOpacity', () => {
      expect(component.coverOpacity).toBe(defaultOpacity);
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
      let spy = spyOn(component, 'onMouseEnter');
      let imgEl = element.querySelector('.work-img');
      let event = new Event('mouseenter');
      imgEl.dispatchEvent(event);
      expect(spy).toHaveBeenCalled();

    });

    it('changes the hover state to true', () => {
      component.onMouseEnter();
      expect(component.hover).toEqual(true);
    });

    it('changes the opacity', () => {
      component.onMouseEnter();
      expect(component.coverOpacity).not.toEqual(defaultOpacity);
    });

  });

  describe('onMouseLeave', () => {

    xit('onMouseLeave is called when a mouse leaves the element', () => {
      let element = fixture.nativeElement;
      let spy = spyOn(component, 'onMouseLeave');
      let imgEl = element.querySelector('.work-img');
      let event = new Event('mouseleave');
      imgEl.dispatchEvent(event);
      expect(spy).toHaveBeenCalled();

    });

    it('changes the hover state to false', () => {
      component.onMouseEnter();
      component.onMouseLeave();
      expect(component.hover).toEqual(false);
    });

    it('returns the opacity to default', () => {
      component.onMouseEnter();
      component.onMouseLeave();
      expect(component.coverOpacity).toEqual(defaultOpacity);
    });

  });

  describe('hoverState', () => {

    it('the title is displayed when the image is in hover state', () => {
        const compiled = fixture.debugElement.nativeElement;
        component.hover = true;
        fixture.detectChanges();
        expect(compiled.querySelector('.hover-detail')).toBeTruthy();
    });

    it('the title isnt displayed when the image is in hover state', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('.hover-detail')).toBeFalsy();
    });
  });

});

@Component({
  selector: 'test-component-wrapper',
  template: '<app-comic-item [comic]="comic"></app-comic-item>'
})
class TestComponentWrapper {
  comic = new Comic('Awesome Comic', 'imagePathUrl', ['mike'], 'Awesome comic story', ['bob']);
}

