import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public healthOptions;

  public technologies =[{
       name : 'Know how it spreads', 
       description : ['There is currently no vaccine to prevent coronavirus disease 2019 (COVID-19).','The best way to prevent illness is to avoid being exposed to this virus.'],
       image: '/assets/images/angular-logo.png'
    },
    { 
       name : 'Wash your hands often', 
       description : ['Wash your hands often with soap and water for at least 20 seconds especially after you have been in a public place.'],
       image: '/assets/images/vuejs-logo.png'
    },
    { 
       name : 'Avoid close contact', 
       description : ['Inside your home: Avoid close contact with people who are sick.If possible, maintain 6 feet between the person who is sick and other household members.',
       'Outside your home: Put 6 feet of distance between yourself and people who don’t live in your household.'],
       image: 'assets/images/react-logo.png'
    },
    { 
       name : 'Face Coverings', 
       description : ['You could spread COVID-19 to others even if you do not feel sick.','The mask is meant to protect other people in case you are infected.'],
       image: 'assets/images/typescript-logo.png'
    },
    { 
       name : 'Cover coughs and sneezes', 
       description : ['Always cover your mouth and nose with a tissue when you cough or sneeze', 'Throw used tissues in the trash'],
       image: 'assets/images/ionic-native-logo.png'
    },
    { 
       name : 'Clean and disinfect', 
       description : ['Clean AND disinfect frequently touched surfaces daily.','If surfaces are dirty, clean them. Use detergent or soap and water prior to disinfection.'],
       image: 'assets/images/capacitor-logo.png'
    },
  ];

  constructor(private dataService: DataService) {}
  
  ngOnInit() {
    this.dataService.getHealthData().subscribe(data => {
      this.healthOptions = data;
    })
  }

  public captureName(event: any) : void  {
     console.log(`Captured name by event value: ${event}`);
  }

}
