import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftWeatherComponent } from './left-weather.component';

describe('LeftWeatherComponent', () => {
  let component: LeftWeatherComponent;
  let fixture: ComponentFixture<LeftWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
