
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApiService } from '../services/api.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dailog',
  templateUrl: './dailog.component.html',
  styleUrls: ['./dailog.component.css']
})
export class DailogComponent implements OnInit {

  freshnessList=["Brand New","Second Hand","Refurbished"]
  productForm !: FormGroup
  actionBtn  :string ="save";

  constructor( private formBuilder: FormBuilder, private api : ApiService ,
    @Inject(MAT_DIALOG_DATA) public editData:any,
    private dailogref:MatDialogRef<DailogComponent>,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.productForm= this.formBuilder.group({
      productName: ['', Validators.required],
      category : ['', Validators.required],
      date:['',Validators.required],
      freshness : ['', Validators.required],
      price:['',Validators.required],
      Comment:['',Validators.required]

    });
    console.log(this.editData)
    if(this.editData){
      this.actionBtn="update";
      this.productForm.controls['productName'].setValue(this.editData.productName);
      this.productForm.controls['category'].setValue(this.editData.category);
      this.productForm.controls['date'].setValue(this.editData.date);
      this.productForm.controls['freshness'].setValue(this.editData.freshness);
      this.productForm.controls['price'].setValue(this.editData.price);
      this.productForm.controls['Comment'].setValue(this.editData.Comment);
    }

  }

   addProduct(){
    console.log(this.productForm.value)
    if(!this.editData){
      if(this.productForm.valid){
        this.api.postProduct(this.productForm.value)
        .subscribe({
          next:(_res:any)=>{
            this.toastr.success("Product added successfully")
            this.productForm.reset();
            this.dailogref.close('save');
          },
          error:()=>{
            this.toastr.warning("Error while adding the product")

          }
        })
      }

    }else{
      this.updateProduct()
    }

   }
  updateProduct() {
    this.api.putProduct(this.productForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        this.toastr.success("Product Updated Successfully")
        this.productForm.reset();
        this.dailogref.close('updated');
          },
          error:()=>{
            this.toastr.info("Error while updating the record")
          }
    })
  }
}
