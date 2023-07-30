import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonapicallService {
  postApiForStudent(studentName: any) {
    throw new Error('Method not implemented.');
  }
  // adminUrl = " c/admin"
  // studentUrl = "http://localhost:3000/studentName"
  url = "http://localhost:3000/"

  constructor(private httpClient : HttpClient) { }

  // postApiCall(formData : any){
  //  return this.httpClient.post(this.adminUrl,formData);
  // }

  // postApiForStudent(data : any){
  //  return this.httpClient.post(this.studentUrl,data);
  // }

  postApiCall(endpoint:string, data:any){
    //post method: 2 para: form url and form Data
    let apiUrl = this.url + endpoint;
    return  this.httpClient.post(apiUrl,data);
  }

  getApiCall(endpoint : any){
    let url = this.url + endpoint;
    return this.httpClient.get(url)
  }

}
