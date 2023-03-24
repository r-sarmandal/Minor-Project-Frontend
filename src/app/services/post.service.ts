import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  public saveGeneralFoundPost(post:any)
  {
      return this.http.post(`${baseUrl}/foundpost/save`, post);
  }

  public saveIdFoundPost(post:any)
  {
      return this.http.post(`${baseUrl}/idfoundpost/save`, post);
  }

  public saveKeyFoundPost(post:any)
  {
      return this.http.post(`${baseUrl}/keyfoundpost/save`, post);
  }

  public saveLostPost(post:any)
  {
      return this.http.post(`${baseUrl}/lostpost/save`, post);
  }

  public saveKeyLostPost(post:any)
  {
      return this.http.post(`${baseUrl}/keylostpost/save`, post);
  }

  public returnAllLostPost()
  {
    return this.http.get(`${baseUrl}/lostpost/all-posts`);
  }
}
