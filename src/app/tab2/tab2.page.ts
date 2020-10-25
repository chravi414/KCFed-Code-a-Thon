import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public opportunities = [ {
    id : 1,
    label: 'Udemy',
    logo:'tv-outline',
    subcat:'Uploaded by Tithen',
    rank:75,
  },{
    id : 1,
    label: 'Plural Sight',
    logo:'happy-outline',
    subcat:'Uploaded by hhshs',
    rank:40,
  },
  {
    id : 1,
    label: 'CourseEra',
    logo:'heart',
    subcat:'Uploaded by get',
    rank:67,
  },{
    id : 1,
    label: 'Udacity',
    logo:'logo-octocat',
    subcat:'Uploaded by abc',
    rank:55,
  },
  {
    id : 1,
    label: 'Edureka',
    logo:'bug',
    subcat:'Uploaded by xtz',
    rank:45,
  }]
  constructor() {}

}
