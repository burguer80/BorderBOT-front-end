import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BorderListComponent} from './border-list.component';

describe('BorderListComponent', () => {
  let component: BorderListComponent;
  let fixture: ComponentFixture<BorderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BorderListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
