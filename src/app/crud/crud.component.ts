import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  crudForm !: FormGroup
  crudDataList:any;
  editData:any;
  constructor(private formBuilder: FormBuilder, private api : ApiService, ) { }

  ngOnInit(): void {
    this.editCrud();
    this.crudForm= this.formBuilder.group({
      FirstName: ['', Validators.required],
      SecondName : ['', Validators.required],
      phoneNumber:['',Validators.required],
      empId : ['', Validators.required],
      date:['',Validators.required],
      Comment:['',Validators.required]

    });
  }
  // if(){

  //   this.crudForm.controls['FirstName'].setValue(this.editCrudData.FirstName);

  // }
  cardClicked(id:any){

    this.editData=this.crudDataList[id]
    this.crudForm.controls['FirstName'].setValue(this.editData.FirstName);
    this.crudForm.controls['SecondName'].setValue(this.editData.SecondName);
    this.crudForm.controls['phoneNumber'].setValue(this.editData.phoneNumber);
    this.crudForm.controls['empId'].setValue(this.editData.empId);
    this.crudForm.controls['date'].setValue(this.editData.date);
    this.crudForm.controls['Comment'].setValue(this.editData.Comment);
  }

  editCrud(){
    this.api.getCrudData()
    .subscribe({
      next:(res)=>{
        console.log(res)
        this.crudDataList=[];
        this.crudDataList=res;

      },
      error:(err)=>{
        alert("Error while fetching records");

      }
    })
  }
  onSubmit(){
    console.log(this.crudForm.value)
    // if(!this.crudForm.value){
      if(this.crudForm.valid){
        this.api.postCrudData(this.crudForm.value)
        .subscribe({
          next:(_res:any)=>{
            alert("crud data successfully")


          },
          error:()=>{
            alert("Error while adding the product")


          }
        })
      }

    // }
    else{
      this.updateProduct()
    }

   }
   updateProduct() {
    this.api.editCrudData(this.crudForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Product Updated Successfully")

          },
          error:()=>{
            alert("Error while updating the record")

          }
    })
  }
  deleteData(){

    this.api.deleteCrudData(this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Product deleted Successfully")
        this.editCrud()
          },
          error:()=>{
            alert("Error while deleting the record")

          }
    })
  }
  }



