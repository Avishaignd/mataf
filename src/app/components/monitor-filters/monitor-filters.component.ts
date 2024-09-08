import { TraineesService } from './../../services/trainees.service';
import { searchTerm } from './../filter/filter.component';
import { Component, EventEmitter, Output, WritableSignal, input, signal } from '@angular/core';
import { ITrainee } from '../../mock-data/mockData';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Subject, debounceTime } from 'rxjs';
import { MatCheckboxModule } from '@angular/material/checkbox';


@Component({
  selector: 'app-monitor-filters',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatSelectModule, MatFormFieldModule, MatCheckboxModule],
  templateUrl: './monitor-filters.component.html',
  styleUrl: './monitor-filters.component.scss'
})
export class MonitorFiltersComponent {

  constructor(private fb: FormBuilder, private traineesService: TraineesService) { }

  @Output() filterChanged = new EventEmitter();

  allTrainees = input<ITrainee[]>()

  monitorFiltersForm = this.fb.group({
    selectTraineesNames: [''],
    selectTraineesID: [['']],
    passed: [true],
    failed: [true]
  })

  ngOnInit() {
    this.monitorFiltersForm.valueChanges
    .pipe(debounceTime(300))
    .subscribe((value) => {
      this.filterChanged.emit(value)
    })
    const cachedValues = this.traineesService.getMonitorPageFilters()
    this.monitorFiltersForm.patchValue({
      selectTraineesNames: cachedValues.names,
      selectTraineesID: [...cachedValues.ids],
      passed: cachedValues.passed,
      failed: cachedValues.failed
    })
  }

}
