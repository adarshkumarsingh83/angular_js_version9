import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OservableProgressComponent } from './oservable-progress.component';

describe('OservableProgressComponent', () => {
  let component: OservableProgressComponent;
  let fixture: ComponentFixture<OservableProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OservableProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OservableProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
