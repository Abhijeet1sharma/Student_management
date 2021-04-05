import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService implements InMemoryDbService{

  constructor() { }
  createDb(){
    let info=[
      {  id:  1,  name:  'Abhijeet Sharma', email:'abhi@gmail.com', phone:9982515471, Address: "Chandpole", Academics: 'A+' },
      {  id:  2,  name:  'Aayush Sharma', email:'abhi@gmail.com', phone:9982515471, Address: "Chandpole", Academics: 'A+' }
     , {  id:  3,  name:  'piyush Sharma', email:'abhi@gmail.com', phone:9982515471, Address: "Chandpole", Academics: 'A+' }
    ];
    return {info}
  }
}
