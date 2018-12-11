import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  resp: any;
  constructor(private http: HttpClient) { }


  hola(): String {
    //this.http.get("http://localhost:8080/users").suscribe((resp) -> {
    //  console.log(resp);
    //});
    //return "hola";
    //this.http.get("http://localhost:8080/users").subscribe((re) => {
    this.http.get("/api/users").subscribe((re) => {  
      this.resp = re;
      console.log(this.resp);
    });
    //console.log(r);
    return "hola";
  }
}
