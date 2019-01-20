import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BASE_URL} from '../shared/global';
import {Observable} from 'rxjs';

@Injectable()
export class PublisherService {

  constructor(private http: HttpClient) { }

  publish(topic: string, payload: object): Observable<object> {
    console.log('Publishing ' + JSON.stringify(payload) + ' to ' + topic);

    const params = new HttpParams().set('topic', topic);

    return this.http
      .post(BASE_URL + '/publish', payload, { params });
  }

}
