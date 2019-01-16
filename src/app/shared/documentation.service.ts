import { Injectable } from '@angular/core';
import {Model} from './model.model';
import {KafkaEndpoint} from './kafka-endpoint.model';

@Injectable()
export class DocumentationService {

  private endpoints: KafkaEndpoint[] = [
    new KafkaEndpoint('topic-1', 'Foo', {
      'hostDN': 'string',
      'uuid': 'string',
      'customerId': 0,
    }),
    new KafkaEndpoint('topic-2', 'Bar', {
      'hostDN': 'string',
      'uuid': 'string',
    }),
  ];

  private definitions: { [key: string]: Model } = {
    Foo: {
      type: 'object',
      properties: {
        hostDN: {
          type: 'string',
        },
        uuid: {
          type: 'string',
        },
        customerId: {
          type: 'number',
        },
      }
    },
    Bar: {
      type: 'object',
      properties: {
        hostDN: {
          type: 'string',
        },
        uuid: {
          type: 'string',
        },
      }
    }
  };

  constructor() { }

  getKakfaEndpoints(): KafkaEndpoint[] {
    return this.endpoints;
  }

  getModel(modelName: string): Model {
    return this.definitions[modelName];
  }

}
