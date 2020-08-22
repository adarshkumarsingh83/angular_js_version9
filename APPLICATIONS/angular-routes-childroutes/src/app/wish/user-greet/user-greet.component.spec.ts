import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGreetComponent } from './user-greet.component';

describe('UserGreetComponent', () => {
  let component: UserGreetComponent;
  let fixture: ComponentFixture<UserGreetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGreetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
