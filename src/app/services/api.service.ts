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
  email: any;

  constructor(private http: HttpClient) { }
  postProduct(data: any) {
    return this.http.post<any>("http://localhost:3000/productList", data)
  }
  getProduct() {
    return this.http.get<any>("http://localhost:3000/productList/");
  }
  putProduct(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/productList/" + id, data)
  }
  deletProduct(id: number) {
    return this.http.delete<any>("http://localhost:3000/productList/" + id);
  }
  deleteDataTable(id: number) {
    return this.http.delete<any>("http://localhost:3000/signupUsers/" + id);

  }

  isLoggedIn() {
    console.log(localStorage.getItem('email'))
    return !!localStorage.getItem('session');

  }
  isAdmin() {
    let email: any = localStorage.getItem('email');
    email = (JSON.parse(email))
    let password: any = localStorage.getItem('password')
    password = JSON.parse(password)
    console.log(email)
    console.log(password)
    if (email === "admin@gmail.com" || email === "eswar@gmail.com") {
      return true
    } else {
      return false
    }


  }


}
