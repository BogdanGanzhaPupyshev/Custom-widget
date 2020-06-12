import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherWidgetApiComponent } from './weather-widget-api.component';

describe('WeatherWidgetApiComponent', () => {
  let component: WeatherWidgetApiComponent;
  let fixture: ComponentFixture<WeatherWidgetApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherWidgetApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherWidgetApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
