import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url!: string;

  constructor(private http:HttpClient) { 
    this.url = "http://127.0.0.1:8000/api/v1/";
  }

  getimdbratingretrievedata(){
    return this.http.get(this.url+'imdbratingretrieve/'); 
    }

  getimdbratingbyid(id: number){
    let endPoints = "imdbrating/" + id;
    return this.http.get(this.url+endPoints); 
    }
  
  addimdbratingdata(postdata: Object){
    return this.http.post(this.url+'imdbrating/', postdata); 
    }

  deleteimdbratingdata(id: number){
    let endPoints = "imdbrating/" + id;
    return this.http.delete(this.url+endPoints); 
    }
  
  updateimdbratingdata(postdata: Object, id: number){
    let endPoints = "imdbrating/" + id;
    return this.http.put(this.url+endPoints, postdata); 
    }

}
