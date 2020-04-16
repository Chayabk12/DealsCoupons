import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  token: string;
  body: any;


  constructor(private http : HttpClient) { }

 
   

  submitRegister(body : any){
    return this.http.post('http://localhost:1233/rest/register', body)
    observe : 'body'
    console.log(body)
 
 }

 login(body:any){

  
  return this.http.post('http://localhost:1233/rest/login', body,{
    observe:'body'
  });

}


storeUserData(token: string, body: object) {
  this.token = token;
  this.body = body;
  localStorage.setItem('access_token', token);
  localStorage.setItem('body', JSON.stringify(body));
}



isLoggedIn(): boolean {
  console.log('check loggd in')
  return ( localStorage.getItem('access_token') !== null );

}

getUserName() {
  return this.http.get('http://localhost:1233/rest/username', {
    observe: 'body',
    params: new HttpParams().append('token', localStorage.getItem('token'))
    
  });
 
}




}
