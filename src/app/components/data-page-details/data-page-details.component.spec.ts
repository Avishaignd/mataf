import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPageDetailsComponent } from './data-page-details.component';

describe('DataPageDetailsComponent', () => {
  let component: DataPageDetailsComponent;
  let fixture: ComponentFixture<DataPageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataPageDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataPageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
