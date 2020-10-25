import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public healthOptions = [ {
    id : 1,
    label: 'Memorable Ads',
    logo:'tv-outline',
    subcat:'Uploaded by Tithen',
    rank:75,
  },{
    id : 1,
    label: 'Comedy',
    logo:'happy-outline',
    subcat:'Uploaded by hhshs',
    rank:80,
  },
  {
    id : 1,
    label: 'Love',
    logo:'heart',
    subcat:'Uploaded by get',
    rank:65,
  },{
    id : 1,
    label: 'Cartoon',
    logo:'logo-octocat',
    subcat:'Uploaded by abc',
    rank:55,
  },
  {
    id : 1,
    label: 'Animals',
    logo:'bug',
    subcat:'Uploaded by xtz',
    rank:45,
  }]
  constructor() {}
  
  unread() {

  }

}
