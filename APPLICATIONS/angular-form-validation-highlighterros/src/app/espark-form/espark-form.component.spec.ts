import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsparkFormComponent } from './espark-form.component';

describe('EsparkFormComponent', () => {
  let component: EsparkFormComponent;
  let fixture: ComponentFixture<EsparkFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsparkFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsparkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
