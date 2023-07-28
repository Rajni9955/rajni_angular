import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoringdataService {
  userFullName : any;

  setData!: string;

  constructor() { }
}
