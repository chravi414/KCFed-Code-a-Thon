import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  public opportunities;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getOpportunities().subscribe(data => {
      this.opportunities = data;
    })
  }

}
