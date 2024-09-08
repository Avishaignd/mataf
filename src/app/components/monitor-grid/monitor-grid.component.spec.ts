import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorGridComponent } from './monitor-grid.component';

describe('MonitorGridComponent', () => {
  let component: MonitorGridComponent;
  let fixture: ComponentFixture<MonitorGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitorGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitorGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
