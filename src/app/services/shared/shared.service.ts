import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public BaseURL: any = 'http://172.16.16.225/';
  
  constructor() { }

}