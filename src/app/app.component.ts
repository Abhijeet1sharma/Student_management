import { Component,OnInit } from '@angular/core';
import {GenerateInfoService} from './services/generate-info.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  flag:Boolean=false
  students:any[];

  constructor(private Generate:GenerateInfoService){
  
  
  
 
  }

  ngOnInit() {
   
  }
  openNav()
  {
    this.flag=true;
  }
   
}
