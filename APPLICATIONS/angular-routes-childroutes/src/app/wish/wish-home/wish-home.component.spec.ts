import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishHomeComponent } from './wish-home.component';

describe('WishHomeComponent', () => {
  let component: WishHomeComponent;
  let fixture: ComponentFixture<WishHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
