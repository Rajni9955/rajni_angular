import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonApiCallService {
  

  url = 'http://localhost:3000/';

  constructor(private httpClient : HttpClient) { }


  postApiCall(endPoint : string, formData : any){
    let url = this.url + endPoint;
    return this.httpClient.post(url,formData);
  }

  getApiCall(endPoint : string , id?:number){
    let url = id ? this.url + endPoint + '/' + id : this.url + endPoint;
    return this.httpClient.get(url);
  }
  patchApiCall(endPoint: any, data: any, id: any) {
    let url = this.url + endPoint;
    return this.httpClient.patch(url,data,id);  
}

  deleteApiCall(endPoint : string,id : number){
    let url = this.url + endPoint;
    return this.httpClient.delete(url); 
  }
}
