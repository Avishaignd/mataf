import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPageGridComponent } from './data-page-grid.component';

describe('DataPageGridComponent', () => {
  let component: DataPageGridComponent;
  let fixture: ComponentFixture<DataPageGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataPageGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataPageGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
