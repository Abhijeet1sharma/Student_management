import { Component,OnInit } from '@angular/core';
import {GenerateInfoService} from './services/generate-info.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  students:any[];
  constructor(private Generate:GenerateInfoService){
  
 
  }

  ngOnInit() {
    this.Generate.getInfo().subscribe((data : any[])=>{
        console.log(data);
        this.students = data;
    })
  }
   
}
