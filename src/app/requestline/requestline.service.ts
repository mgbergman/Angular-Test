import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {RequestLine} from '../requestline/requestline.class';
import { Request } from '../request/request.class';

const baseurl = "http://localhost:8080/api/lines";

@Injectable({
  providedIn: 'root'
})
export class RequestLineService {

  constructor(
    private http: HttpClient
  ) { }
  getLines(id: number): Observable<RequestLine[]>
  {
    return this.http.get(`${baseurl}/for-req/${id}`) as Observable<RequestLine[]>;
  }

  list(): Observable<RequestLine[]>
  {
    return this.http.get(`${baseurl}/`) as Observable<RequestLine[]>;
  }
  
  get(id: number): Observable<RequestLine>
  {
    return this.http.get(`${baseurl}/${id}`) as Observable<RequestLine>;
  }

  create(requestLine: RequestLine): Observable<RequestLine>
  {
    return this.http.post(`${baseurl}/`, requestLine) as Observable<RequestLine>;
  }

  edit(requestLine: RequestLine): Observable<RequestLine>
  {
    return this.http.put(`${baseurl}/${requestLine.id}`, requestLine) as Observable<RequestLine>;
  }

  delete(requestLine: RequestLine): Observable<RequestLine>
  {
    return this.http.delete(`${baseurl}/${requestLine.id}`) as Observable<RequestLine>;

  }
}

  

