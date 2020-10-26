import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public fakenews;
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.dataService.getFakeNews().subscribe(data => {
      this.fakenews = data;
    })
  }

}
