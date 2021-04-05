import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import {StudentDataService} from './student-data.service'


@Injectable({
  providedIn: 'root'
})
export class GenerateInfoService {
   httpoptions:any
  student: any;
  SERVER_URL: string = "/api/info";
  constructor(private httpClient: HttpClient) { 
    
     this.httpoptions={
headers:new HttpHeaders({'Content-Type':'application/json'})
     }
    }

getInfo(){ 
    return   this.httpClient.get(this.SERVER_URL);

}

// public getInfoById(id){
//   return this.httpClient.get(`${this.SERVER_URL }/${id}`,this.httpoptions); 
// }

public DeleteInfo(id:number){
  return this.httpClient.delete<any>(`${this.SERVER_URL}/${id}`)
}

public UpdateInfo(data){
  return this.httpClient.put<any>(`${this.SERVER_URL}`,data,this.httpoptions)
}

public AddInfo()
{
  return this.httpClient.post<any>(`${this.SERVER_URL}`,this.httpoptions)
}



}
