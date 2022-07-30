import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  resetData() {
    throw new Error('Method not implemented.');
  }
  admin: any;
  email:any;

  constructor(private http: HttpClient) { }
  postProduct(data : any){
    return this.http.post<any>("http://localhost:4000/productList",data)
  }
  getProduct(){
    return this.http.get<any>("http://localhost:4000/productList/");
  }
  putProduct(data : any,id:number){
    return this.http.put<any>("http://localhost:4000/productList/"+id,data)
  }
 deletProduct(id:number){
  return this.http.delete<any>("http://localhost:4000/productList/"+id);

 }

 isLoggedIn(){
  console.log(localStorage.getItem('email'))
  return !!localStorage.getItem('session');

 }
 isAdmin(){
  let email:any=localStorage.getItem('email');
  email=(JSON.parse(email))
  console.log(email)
  if (email ==="admin@gmail.com"){
    console.log("admin found")
    return true
  }else{
    console.log(" admin not found")
    return false
  }


 }


// email:any;
// password:any
// createToken(){
//   let admin:any=localStorage.getItem('credentials')
//     this.admin=JSON.parse(admin)
//   if (this.email=='admin@gmail.com' && this.password=='admin123'){
//     console.log("token found")
//     return true
//   }
//   console.log("admin not found")
//   return false
// }

}
