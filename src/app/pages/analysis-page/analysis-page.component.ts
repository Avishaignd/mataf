import { Component } from '@angular/core';
import { AnalysisPageFiltersComponent } from "../../components/analysis-page-filters/analysis-page-filters.component";
import { TraineesService } from '../../services/trainees.service';

@Component({
  selector: 'app-analysis-page',
  standalone: true,
  imports: [AnalysisPageFiltersComponent],
  templateUrl: './analysis-page.component.html',
  styleUrl: './analysis-page.component.scss'
})
export class AnalysisPageComponent {

  constructor(private traineesService: TraineesService) {}

  allTrainees = this.traineesService.allTraineesRE

  ngOnInit() {
    this.traineesService.getAllTrainees()
  }

  handleFiltersChange(event: any) {
    console.log(event)
  }
}
