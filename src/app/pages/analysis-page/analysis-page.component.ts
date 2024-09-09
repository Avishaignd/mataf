import { Component } from '@angular/core';
import { AnalysisPageFiltersComponent } from "../../components/analysis-page-filters/analysis-page-filters.component";
import { TraineesService } from '../../services/trainees.service';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';

type TChart = {
  title: string,
  data: any[],
  type: number
}
@Component({
  selector: 'app-analysis-page',
  standalone: true,
  imports: [AnalysisPageFiltersComponent, CdkDropList, CdkDrag],
  templateUrl: './analysis-page.component.html',
  styleUrl: './analysis-page.component.scss'
})
export class AnalysisPageComponent {

  get randAverage() {
    return Math.floor(Math.random() * 101)
  }

  constructor(private traineesService: TraineesService) {}

  allTrainees = this.traineesService.allTraineesRE

  chartsArray: TChart[] = [
    {
      title: 'Grade Averages Over Time',
      data: [],
      type: 1
    },
    {
      title: 'Grade Averages Per Subject',
      data: [],
      type: 2
    },
    {
      title: 'Student Averages',
      data: [],
      type: 3
    }
  ]


  ngOnInit() {
    this.traineesService.getAllTrainees()
  }

  handleFiltersChange(event: any) {
    console.log(event)
    this.chartsArray.forEach(chart => {
      if (chart.type === 1 || chart.type === 3) {
        chart.data = [...event.ids]
      } else {
        if (event.subjects !== null) {
          chart.data = [...event.subjects]
        }
      }
    })
  }

  drop(event: CdkDragDrop<TChart[]>) {
    moveItemInArray(this.chartsArray, event.previousIndex, event.currentIndex);
  }
}
