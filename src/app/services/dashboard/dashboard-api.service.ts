import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardApiService {

  MachineStatusArray: any = [];

  Today: any = new Date();

  Search_Date: any = this.fullDateStringToDateConversion(new Date().toISOString());

  constructor(public http: HttpClient,
    public sharedService: SharedService) { }


  // For Fetching the Machine Status from the server
  fetchMachineStatusAPI() {
    let data = {
      "token": "motor_details",
    }

    const headerDict = {
      'Content-Type': 'application/json',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.post(this.sharedService.BaseURL + 'PM_API/motor_dashboard/api/motor_dashboard.php', JSON.stringify(data), requestOptions);
  }

  // For Full Date to Short Date Conversion
  public fullDateStringToDateConversion(fullDate) {
    let FullDate = fullDate.split('T');
    return FullDate[0];
  }


}
