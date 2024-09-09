import { Component, EventEmitter, Output, input } from '@angular/core';
import { ITrainee } from '../../mock-data/mockData';
import { CommonModule, KeyValuePipe } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-data-page-details',
  standalone: true,
  imports: [KeyValuePipe, CommonModule, FormsModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './data-page-details.component.html',
  styleUrl: './data-page-details.component.scss'
})
export class DataPageDetailsComponent {

  @Output() onNewTraineeSaved = new EventEmitter()

  constructor(private fb: FormBuilder) { }

  selctedTrainee = input<ITrainee>()

  displayed?: ITrainee

  isAdding = input<boolean>(false)

  ngOnInit() {
    if (this.selctedTrainee() === undefined) {
      this.displayed = {
        id: '',
        name: '',
        grade: 0,
        email: '',
        dateJoined: '',
        address: '',
        city: '',
        country: '',
        zip: 0,
        subject: '',
        average: 0,
        exams: 0
      }
    } else {
      this.displayed = this.selctedTrainee()
    }
  }

  getInputType(field: string) {
    if (field === 'grade' || field === 'zip' || field === 'average' || field === 'exams') {
      return 'number'
    } else {
      return 'text'
    }
  }

  addTraineeForm = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    grade: [0, Validators.required],
    email: ['', Validators.required],
    dateJoined: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    country: ['', Validators.required],
    zip: [0, Validators.required],
    subject: ['', Validators.required],
    average: [0, Validators.required],
    exams: [0, Validators.required]
  })

  handleSubmit() {
    this.onNewTraineeSaved.emit(this.addTraineeForm.value)
  }

}
