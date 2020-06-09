import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwt: string = '';

  constructor(private http: HttpClient) { }

  login(name: string, password: string){
    this.http.post('http://localhost:8080/login', { 'name': name, 'password': password})
      .subscribe(resp => console.log('auth resp: ', resp), error => console.log('error', error));
  }
  
}
