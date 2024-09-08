import { Component, input } from '@angular/core';
import { ITrainee } from '../../mock-data/mockData';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-monitor-grid',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './monitor-grid.component.html',
  styleUrl: './monitor-grid.component.scss'
})
export class MonitorGridComponent {

  displayedTrainees = input.required<ITrainee[]>()

  displayedColumns = ['id', 'name', 'average', 'exams']

}
