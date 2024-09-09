import { Injectable, WritableSignal, signal } from '@angular/core';
import { MOCK_DATA, ITrainee } from '../mock-data/mockData'

@Injectable({
  providedIn: 'root'
})


export class TraineesService {

  private allTrainees: WritableSignal<ITrainee[]> = signal([])
  public allTraineesRE = this.allTrainees.asReadonly()

  dataPageFilters = ''

  monitorPageFilters = {
    names: '',
    ids: [''],
    passed: true,
    failed: true
  }

  constructor() { }

  getAllTrainees() {
    setTimeout(() => { //simulating fetching from server
      this.allTrainees.set(MOCK_DATA)
    }, 300)
  }

  addTrainee(trainee: ITrainee) {
    this.allTrainees.set([...this.allTrainees(), trainee])
  }

  removeTrainee(trainee: ITrainee) {
    let newTraineesArray = this.allTrainees().filter(item => {
      return item.id !== trainee.id
    })
    this.allTrainees.set(newTraineesArray)
  }

  setDataPageFilters(search: string) {
    this.dataPageFilters = search
  }

  setMonitorPageFilters(names: string, ids: string[], passed: boolean, failed: boolean) {
    this.monitorPageFilters.names = names
    this.monitorPageFilters.ids = [...ids]
    this.monitorPageFilters.passed = passed
    this.monitorPageFilters.failed = failed
  }

  getMonitorPageFilters() {
    return this.monitorPageFilters
  }

  getDataPageFilters() {
    return this.dataPageFilters
  }
}
