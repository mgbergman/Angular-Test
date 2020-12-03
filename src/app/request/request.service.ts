import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Request } from './request.class';

const baseurl = "http://localhost:8080/api/requests";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private http: HttpClient
  ) { }
  list(): Observable<Request[]> {
    return this.http.get(`${baseurl}`) as Observable<Request[]>;
  }
  change (request:Request): Observable<Request> {
    return this.http.put(`${baseurl}/${request.id}`, request) as Observable<Request>;
  }
  get(id: number): Observable<Request> {
    return this.http.get(`${baseurl}/${id}`) as Observable<Request>;
  }
  create (request: Request): Observable<Request> {
    return this.http.post(`${baseurl}`, request) as Observable<Request>;
  }
  remove(request: Request): Observable<any>{ // added this function
    return this.http.delete(`${baseurl}/${request.id}`) as Observable<any>;
  }
  requests(id: number): Observable<Request[]>
  {
    return this.http.get(`${baseurl}/reviews/${id}`) as Observable<Request[]>;
  }

  review(request: Request): Observable <Request> {
      return this.http.put(`${baseurl}/review`, request) as Observable <Request>;
  }

  approve(request: Request): Observable <Request> {
    return this.http.put(`${baseurl}/approve`, request) as Observable <Request>;
}

reject(request: Request): Observable <Request> {
  return this.http.put(`${baseurl}/reject`, request) as Observable <Request>;
}
add(request: Request): Observable<Request>
{
  return this.http.post(`${baseurl}/`, request) as Observable<Request>;
}



}
