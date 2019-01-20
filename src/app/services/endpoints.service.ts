import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {KafkaEndpoint} from '../shared/kafka-endpoint.model';

@Injectable()
export class EndpointsService {

  constructor(private http: HttpClient) { }

  getKakfaEndpoints(): Observable<KafkaEndpoint[]> {
    const url = 'http://172.30.141.19:8080/kafka-api/endpoints';
    return this.http
      .get(url)
      .pipe(map(item => item as KafkaEndpoint[]));
  }

}
