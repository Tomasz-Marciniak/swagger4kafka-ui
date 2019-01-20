import { Injectable } from '@angular/core';
import {Model} from '../shared/model.model';
import {KafkaEndpoint} from '../shared/kafka-endpoint.model';

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

  private models: { [key: string]: Model } = {
    Foo: {
      type: 'object',
      properties: {
        hostDN: {
          type: 'string',
        },
        uuid: {
          type: 'string',
          enum: [
            'foo1',
            'foo2',
            'foo3'
          ],
        },
        customerId: {
          $ref: '/#/definitions/foo',
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
    console.log(modelName);
    return this.models[modelName];
  }

  getModels(): { [key: string]: Model } {
    return this.models;
  }

}
