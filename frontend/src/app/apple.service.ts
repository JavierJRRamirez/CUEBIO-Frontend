import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Apple } from './apple';
// import { Subject } from 'rxjs/Rx';





@Injectable({
  providedIn: 'root'
})
export class AppleService {

  BASE_URL = 'http://localhost:3000';


  private apples: Apple[];

  // private messageSubjet = new Subject();
  
  // private thomasURL = "https://vndmcwy7p1.execute-api.us-east-2.amazonaws.com/beta/query1";
  // private localhost3000query = 'http://localhost:3000/beta/query1';

  // public httpGETFiltered;

  applesSource = new BehaviorSubject<Apple[]>([]);
  // sharedApples = this.apples.asObservable();
    
  constructor(private http: HttpClient) {
    this.apples = new Array<Apple>();
  }

  getApples() {
    this.http.get(this.BASE_URL + '/apples')
    .subscribe(data => {
      this.apples = data;
      console.log('get apples service ', this.apples);
      this.applesSource.next(this.apples);

    })
  }
  


  // getApples(): Observable<any> {

  //  return this.http.get(this.BASE_URL + '/apples'); // NEEDS TO BE CHANGES TO EC2 DOMAIN ON DEPLOYMENT
  // }

  // getFilteredApples(selectedFilter: String, value: String): Observable<any> {
  
  //   return this.http.get(this.BASE_URL + selectedFilter + '/' + value);
   
  // }
    
 
}


