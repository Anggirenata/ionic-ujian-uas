import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private historyData: any[] = [];

  constructor() {}

  addToHistory(data: any) {
    this.historyData.push(data);
  }

  getHistory() {
    return this.historyData;
  }
}
