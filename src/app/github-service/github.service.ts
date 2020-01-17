import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
 import "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private username='chepkiruibetty'
  private client_id = '5ffa7c5cd4df559a6ac3';
  private client_secret='c928803011adaf70ce872702dc01bc75ef47e6ea';

  constructor(private http:HttpClient) {
console.log("Github Service Init...");
   }
}
getUser(){
  return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json());
}

getRepos(){
  return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json());
}

updateUsername(username:string){
  this.username = username;
}
