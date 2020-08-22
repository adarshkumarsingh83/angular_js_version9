import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWishComponent } from './user-wish.component';

describe('UserWishComponent', () => {
  let component: UserWishComponent;
  let fixture: ComponentFixture<UserWishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserWishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
