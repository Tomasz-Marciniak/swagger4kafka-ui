import { Injectable } from '@angular/core';
import {Model} from '../shared/model.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class ModelsService {

  constructor(private http: HttpClient) { }

  getModels(): Observable<{ [key: string]: Model }> {
    const url = 'http://172.30.141.19:8080/kafka-api/models';
    return this.http
      .get(url)
      .pipe(map(item => item as { [key: string]: Model }));
  }

}
