import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWishComponent } from './admin-wish.component';

describe('AdminWishComponent', () => {
  let component: AdminWishComponent;
  let fixture: ComponentFixture<AdminWishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
