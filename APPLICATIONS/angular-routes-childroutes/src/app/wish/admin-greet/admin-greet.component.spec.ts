import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGreetComponent } from './admin-greet.component';

describe('AdminGreetComponent', () => {
  let component: AdminGreetComponent;
  let fixture: ComponentFixture<AdminGreetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGreetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
