import { Component, input, output } from '@angular/core';
import { ITrainee } from '../../mock-data/mockData';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-data-page-grid',
  standalone: true,
  imports: [MatTableModule, MatPaginator, MatPaginatorModule,MatButtonModule],
  templateUrl: './data-page-grid.component.html',
  styleUrl: './data-page-grid.component.scss'
})
export class DataPageGridComponent {

  constructor() { }

  trainees = input.required<ITrainee[]>()

  handleSelectTrainee = output<ITrainee>()

  displayedColumns: string[] = ['id', 'name', 'dateJoined', 'grade', 'subject']

  selectedTrainee?: ITrainee

  pagStart: number = 0

  pagEnd: number = 10

  ngOnInit() {

  }

  onSelectRow(trainee: ITrainee) {
    this.handleSelectTrainee.emit(trainee)
  }

  handleNext() {
    if (this.pagEnd !== this.trainees().length) {
      this.pagEnd = this.pagEnd + 10
      this.pagStart = this.pagStart + 10
    }
  }

  handlePrev() {
    if (this.pagStart !== 0) {
      this.pagEnd = this.pagEnd - 10
      this.pagStart = this.pagStart - 10
    }
  }

}
