import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService implements InMemoryDbService{

  constructor() { }
  createDb(){
    let info=[
      {  id:  1,  name:  'Abhijeet Sharma', email:'abhi@gmail.com', phone:9982515471, Branch:"Computer Science", Academics: 'A+' },
      {  id:  2,  name:  'Aayush Sharma', email:'abhi@gmail.com', phone:9982515471,Branch:"Civil" , Academics: 'A+' }
     , {  id:  3,  name:  'piyush Sharma', email:'abhi@gmail.com', phone:9982515471, Branch: "Mechnical", Academics: 'A+' }
   , {  id:  4,  name:  'Ajay Sharma', email:'Ajay@gmail.com', phone:9982515471, Branch: "Information Technology", Academics: 'A+' }
  ];
    return {info}
  }
}
