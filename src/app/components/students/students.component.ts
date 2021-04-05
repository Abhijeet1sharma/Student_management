import { Component, OnInit ,Input} from '@angular/core';



import {GenerateInfoService} from '../../services/generate-info.service'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers:[GenerateInfoService]
})
export class StudentsComponent implements OnInit {

  @Input()
  Info:any[]

  constructor(private _generate:GenerateInfoService){
    this.Info = [];
  }
  ngOnInit(): void{
    
  
   }
  

   DeleteInfo(id:number){
    this._generate.DeleteInfo(id).subscribe((data:any[])=>{
      this.Info=this.Info.filter((elem)=>{
        return elem.id!==id
      })
      console.log(this.Info)
    })
  }

  update(item:any): void {
    var Name=prompt("Enter the updated name")
    var email=prompt("Enter the updated email")
    var phone=prompt("enter the phone number")
    var add=prompt("enter the address")
    var acad=prompt("enter academics")
    this._generate.UpdateInfo(item ).subscribe(data=>{
      if(Name!='')
      {
        item.name=Name
      }
      if(email!='')
      {
        item.email=email
      }
      if(phone!='')
      {
        item.phone=phone
      }
      if(add!='')
      {
        item.Address=add
      }
      if(acad!='')
      {
        item.Academics=acad
      }
      
      return item
    })
 
  }

  Add()
  {
    var id=prompt("Enter the id ")
    var Name=prompt("Enter the updated name")
    var email=prompt("Enter the updated email")
    var phone=prompt("enter the phone number")
    var add=prompt("enter the address")
    var acad=prompt("enter academics")

    this._generate.AddInfo().subscribe(data=>{
      this.Info.push({id,Name,email,phone,add,acad})
    })
  }
}


 

  


  


