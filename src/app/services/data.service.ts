import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getHealthData() {
    const url = 'https://kcfedhack.firebaseio.com/health.json';
    return this.http.get(url);
  }

  getOpportunities() {
    const url = 'https://kcfedhack.firebaseio.com/opportunities.json';
    return this.http.get(url);
  }

  getFakeNews() {
    const url = 'https://kcfedhack.firebaseio.com/fakenews.json';
    return this.http.get(url);
  }

}
