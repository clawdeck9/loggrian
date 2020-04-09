import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReaderComponent } from './modal-reader.component';

describe('ModalReaderComponent', () => {
  let component: ModalReaderComponent;
  let fixture: ComponentFixture<ModalReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
