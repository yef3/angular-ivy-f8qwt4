import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private httpClient : HttpClient) { }

  // for testing purpose
  public sendGetRequest(u: string) {
    return this.httpClient.post('/api', '', {params: {userid: u}})
  }

  public sendGetPoints(u: string) {
    return this.httpClient.get('/user/get', {params: {userid: u}})
  }
  public sendCreateGame(u: string) {
    return this.httpClient.post('/user/create', '', {params: {userid: u}})
  }
  public sendGainPoints(u: string) {
    return this.httpClient.put('/user/update/gain', '', {params: {userid: u}})
  }
  public sendLosePoints(u: string) {
    return this.httpClient.put('/user/update/lose', '', {params: {userid: u}})
  }
  public sendDeleteUser(u: string) {
    return this.httpClient.delete('/user/delete')
  }
}
