import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class GatinhosService {
  private breedUrl = "https://api.thecatapi.com/v1/breeds";
  
  constructor(private httpClient: HttpClient) { }

  getCatsBreed(){
    return this.httpClient.get(this.breedUrl);
  }
}
