import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderCardComponent } from './border-card.component';

describe('BorderCardComponent', () => {
  let component: BorderCardComponent;
  let fixture: ComponentFixture<BorderCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorderCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
