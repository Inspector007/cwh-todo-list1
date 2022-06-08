import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { 

  }

  getimdbratingretrievedata(){
    return this.http.get('http://127.0.0.1:8000/api/v1/imdbratingretrieve/'); 
    }
}
