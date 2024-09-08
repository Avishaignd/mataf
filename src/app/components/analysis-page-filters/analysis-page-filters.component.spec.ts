import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisPageFiltersComponent } from './analysis-page-filters.component';

describe('AnalysisPageFiltersComponent', () => {
  let component: AnalysisPageFiltersComponent;
  let fixture: ComponentFixture<AnalysisPageFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalysisPageFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalysisPageFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
