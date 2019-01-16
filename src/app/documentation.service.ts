import { Injectable } from '@angular/core';
import {KafkaEndpoint} from './topics/kafka-endpoint.model';

@Injectable()
export class DocumentationService {

  private endpoints: KafkaEndpoint[] = [
    new KafkaEndpoint('topic-1', 'Foo', {
      'hostDN': 'string',
      'uuid': 'string',
      'customerId': 0,
      'siteId': 0,
      'createdDate': '2015-07-20T15:49:04-07:00',
    }),
    new KafkaEndpoint('topic-2', 'Bar', {
      'hostDN': 'string',
      'uuid': 'string',
      'mngIp': 'string',
    }),
  ];

  constructor() { }

  getKakfaEndpoints(): KafkaEndpoint[] {
    return this.endpoints;
  }

}
