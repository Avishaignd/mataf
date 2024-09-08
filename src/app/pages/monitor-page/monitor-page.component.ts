import { TraineesService } from './../../services/trainees.service';
import { Component, effect } from '@angular/core';
import { MonitorFiltersComponent } from "../../components/monitor-filters/monitor-filters.component";
import { ITrainee } from '../../mock-data/mockData';
import { MonitorGridComponent } from "../../components/monitor-grid/monitor-grid.component";

@Component({
  selector: 'app-monitor-page',
  standalone: true,
  imports: [MonitorFiltersComponent, MonitorGridComponent],
  templateUrl: './monitor-page.component.html',
  styleUrl: './monitor-page.component.scss'
})
export class MonitorPageComponent {

  constructor(private traineesService: TraineesService) {
    effect(() => {
      this.displayedTrainees = this.allTrainees()
    })
  }

  allTrainees = this.traineesService.allTraineesRE

  displayedTrainees: ITrainee[] = []

  ngOnInit() {
    this.traineesService.getAllTrainees()
  }

  onFilterChanged(event: any) {
    const { selectTraineesNames, selectTraineesID, passed, failed } = event
    this.traineesService.setMonitorPageFilters(selectTraineesNames, selectTraineesID, passed, failed)
    this.displayedTrainees = this.allTrainees().filter(trainee => {
      if (passed && trainee.average >= 65) {
        return trainee
      }
      if (failed && trainee.average <= 64) {
        return trainee
      }
      if (selectTraineesNames.split(' ').includes(trainee.name)) {
        return trainee
      }
      if (selectTraineesID.includes(trainee.id)) {
        return trainee
      }
      return
    })
  }


}
