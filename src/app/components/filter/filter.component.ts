import { TraineesService } from './../../services/trainees.service';
import { Component, Output, EventEmitter, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime } from 'rxjs';
import {MatButtonModule} from '@angular/material/button';
import { ITrainee } from '../../mock-data/mockData';

export interface searchTerm {
  type?: string,
  operator?: string,
  text: string
}

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule, MatButtonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})

export class FilterComponent {

  @Output() filterChanged = new EventEmitter<searchTerm>();

  @Output() onRemove = new EventEmitter<ITrainee>()

  @Output() onAdd = new EventEmitter()

  selectedTrainee = input<ITrainee>()

  private filterSubject = new Subject<searchTerm>();

  filterValue: string = '';

  cachedValue: string = '';

  searchTerm: searchTerm = {
    type: undefined,
    operator: undefined,
    text: ''
  }

  ngOnInit() {
    let savedValues = this.traineesService.getDataPageFilters()
    this.filterSubject
    .pipe(debounceTime(300))
    .subscribe((value) => {
      this.traineesService.setDataPageFilters(this.filterValue)
      this.filterChanged.emit(value)
    });
    if (savedValues.toString().length > 0) {
      this.filterValue = savedValues
      this.cachedValue = savedValues
      this.onFilterInputChange()
    }
  }

  onFilterInputChange() {
    const splitted = this.filterValue.split(':')
    this.searchTerm.type = splitted[0].toLowerCase()
    if (splitted.length > 1) {
      if (splitted[1].includes('<')) {
        this.searchTerm.operator = 'lt'
      }
      if (splitted[1].includes('>')) {
        this.searchTerm.operator = 'gt'
      }
      this.searchTerm.text = splitted[1].toLowerCase()
      this.searchTerm.text = this.searchTerm.text.replace(/<|>/g, '');
      this.searchTerm.text = this.searchTerm.text.trim()
      this.filterSubject.next(this.searchTerm)
    }
  }

  constructor(private traineesService: TraineesService) {}

  handleRemove() {
    this.onRemove.emit(this.selectedTrainee())
  }

  handleAdd() {
    this.onAdd.emit()
  }

  ngOnDestroy() {
    this.filterSubject.complete()
  }

}
