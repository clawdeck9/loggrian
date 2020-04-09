import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionReaderComponent } from './accordion-reader.component';

describe('AccordionReaderComponent', () => {
  let component: AccordionReaderComponent;
  let fixture: ComponentFixture<AccordionReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
