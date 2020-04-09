import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogReadHomeComponent } from './log-read-home.component';

describe('LogReadHomeComponent', () => {
  let component: LogReadHomeComponent;
  let fixture: ComponentFixture<LogReadHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogReadHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogReadHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
