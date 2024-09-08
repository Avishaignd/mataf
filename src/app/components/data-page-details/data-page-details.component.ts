import { Component, input } from '@angular/core';
import { ITrainee } from '../../mock-data/mockData';

@Component({
  selector: 'app-data-page-details',
  standalone: true,
  imports: [],
  templateUrl: './data-page-details.component.html',
  styleUrl: './data-page-details.component.scss'
})
export class DataPageDetailsComponent {

  selctedTrainee = input<ITrainee>()

  isAdding = input<boolean>(false)

}
