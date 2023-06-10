import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../service.service';

@Component({
  selector: 'app-history',
  templateUrl: 'history.page.html',
  styleUrls: ['history.page.scss'],
})
export class HistoryPage implements OnInit {
  historyData: any[] = [];

  constructor(private historyService: HistoryService) {}

  ngOnInit() {
    this.historyData = this.historyService.getHistory();
  }
}
