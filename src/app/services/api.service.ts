import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

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
  return !!localStorage.getItem('session');
 }
//  isAdmin(){
//   let role=localStorage.getItem('role');
//   console.log(role);
//   return (role=='admin'?true:false)
//  }

}
