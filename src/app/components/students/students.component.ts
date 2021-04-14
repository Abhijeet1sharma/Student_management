import { Component, OnInit ,Input} from '@angular/core';



import {GenerateInfoService} from '../../services/generate-info.service'
import {NgbModal,ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap'
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers:[GenerateInfoService]
})
export class StudentsComponent implements OnInit {

  Info:any[]
  flag:boolean=false
  closeResult:string
  myForm: FormGroup;
  editForm:FormGroup;
  studentobj:any[]

  constructor(private _generate:GenerateInfoService,
    private modalService:NgbModal,
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ){
    this.Info = [];
    this.studentobj= [{ }];
    this.createForm();
  }
  ngOnInit(): void{
    
    this._generate.getInfo().subscribe((data : any[])=>{
      console.log(data);
      this.Info = data;
  })

  this.editForm = this.formBuilder.group({
    id: ['', Validators.required],
    username:  ['', Validators.required],
    email: ['', Validators.required],
    phone: ['',Validators.required],
    add: ['', Validators.required],
    acad: ['', Validators.required]
  });
   }

   private createForm() {
    this.myForm = this.formBuilder.group({
      id: ['', Validators.required],
      username:  ['', Validators.required],
      email: ['', Validators.required],
      phone: ['',Validators.required],
      add: ['', Validators.required],
      acad: ['', Validators.required]
    });
  }
  

   DeleteInfo(id:number){
    this._generate.DeleteInfo(id).subscribe((data:any[])=>{
      this.Info=this.Info.filter((elem)=>{
        return elem.id!==id
      })
      console.log(this.Info)
    })
  }

  // update(item:any): void {
  //   var Name=prompt("Enter the updated name")
  //   var email=prompt("Enter the updated email")
  //   var phone=prompt("enter the phone number")
  //   var add=prompt("enter the address")
  //   var acad=prompt("enter academics")
  //   this._generate.UpdateInfo(item ).subscribe(data=>{
  //     if(Name!='')
  //     {
  //       item.name=Name
  //       console.log("hello")
  //     }
  //     if(email!='')
  //     {
  //       item.email=email
  //     }
  //     if(phone!='')
  //     {
  //       item.phone=phone
  //     }
  //     if(add!='')
  //     {
  //       item.Address=add
  //     }
  //     if(acad!='')
  //     {
  //       item.Academics=acad
  //     }
    
      
  //     return item
  //   })
 
  // }

  Add()
  {
   this.flag=true

    // this._generate.AddInfo().subscribe(data=>{
    //   this.Info.unshift({id,Name,email,phone,add,acad})
    // })
  }


  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  update(context,item) {
    this.modalService.open(context, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  this.studentobj=item
  console.log(this.studentobj)
  
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
   submitForm()
  {
    this.activeModal.close(this.myForm.value)
    var id=this.myForm.value.id
    var Name=this.myForm.value.username
    var email=this.myForm.value.email
    var phone=this.myForm.value.phone
    var add=this.myForm.value.add
    var acad=this.myForm.value.acad
    console.log(add)
    this._generate.AddInfo().subscribe(data=>{
      this.Info.unshift({id,Name,email,phone,add,acad})
    })
    
  }
}


 

  


  


