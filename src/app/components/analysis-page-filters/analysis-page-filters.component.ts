import { Component, EventEmitter, Output, WritableSignal, input, signal } from '@angular/core';
import { ITrainee } from '../../mock-data/mockData';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Subject, debounceTime } from 'rxjs';
import { TraineesService } from '../../services/trainees.service';

@Component({
  selector: 'app-analysis-page-filters',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './analysis-page-filters.component.html',
  styleUrl: './analysis-page-filters.component.scss'
})
export class AnalysisPageFiltersComponent {

  @Output() filterChanged = new EventEmitter();

  constructor(private fb: FormBuilder, private traineesService: TraineesService) { }

  ngOnInit() {
    this.analysisForm.valueChanges
    .pipe(debounceTime(300))
    .subscribe((value) => {
      this.filterChanged.emit(value)
    })
  }

  allTrainees = input<ITrainee[]>()

  analysisForm = this.fb.group({
    ids: [],
    subjects: []
  })
}
