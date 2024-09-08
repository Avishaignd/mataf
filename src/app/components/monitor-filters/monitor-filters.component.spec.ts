import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorFiltersComponent } from './monitor-filters.component';

describe('MonitorFiltersComponent', () => {
  let component: MonitorFiltersComponent;
  let fixture: ComponentFixture<MonitorFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitorFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitorFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
