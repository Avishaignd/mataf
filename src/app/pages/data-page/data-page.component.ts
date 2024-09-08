import { TraineesService } from './../../services/trainees.service';
import { Component } from '@angular/core';
import { FilterComponent } from "../../components/filter/filter.component";
import { DataPageGridComponent } from "../../components/data-page-grid/data-page-grid.component";
import { ITrainee } from '../../mock-data/mockData';
import { DataPageDetailsComponent } from "../../components/data-page-details/data-page-details.component";

@Component({
  selector: 'app-data-page',
  standalone: true,
  imports: [FilterComponent, DataPageGridComponent, DataPageDetailsComponent],
  templateUrl: './data-page.component.html',
  styleUrl: './data-page.component.scss'
})
export class DataPageComponent {

  constructor(private traineesService: TraineesService) { }

  allTrainees = this.traineesService.allTraineesRE

  displayedTrainees: ITrainee[] = []

  selectedTrainee?: ITrainee

  isAdding: boolean = false

  ngOnInit() {
    this.traineesService.getAllTrainees()
  }

  filterData(event: any) {
    const {type, operator, text} = event
    this.displayedTrainees = this.allTrainees().filter((trainee) => {
      if (operator === undefined) {
        if (type === 'name') {
          return trainee.name.toLowerCase().includes(text)
        } else if (type === 'subject') {
          return trainee.subject.toLowerCase().includes(text)
        } else if (type === 'id') {
          return trainee.id === text
        } else {
          return trainee[type as keyof ITrainee] === Number(text)
        }
      } else {
        if (type === 'grade') {
          if (operator === 'gt') {
            return trainee.grade > Number(text)
          } else if (operator === 'lt') {
            return trainee.grade < Number(text)
          } else {
            return trainee.grade == Number(text)
          }
        } else if (type === 'date') {
          if (operator === 'gt') {
            return new Date(trainee.dateJoined) > new Date(text)
          } else if (operator === 'lt') {
            return new Date(trainee.dateJoined) < new Date(text)
          } else {
            return new Date(trainee.dateJoined) == new Date(text)
          }
        } else {
          return
        }
      }
    })
  }

  onTraineeSelected(trainee: ITrainee) {
    this.selectedTrainee = trainee
  }

  onTraineeRemoved(trainee: ITrainee) {
    this.traineesService.removeTrainee(trainee)
    this.selectedTrainee = undefined
  }

  onAddTrainee() {
    this.isAdding = true
  }

}
