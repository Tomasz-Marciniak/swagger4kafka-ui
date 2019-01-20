import { Component, OnInit } from '@angular/core';
import {KafkaEndpoint} from '../shared/kafka-endpoint.model';
import {EndpointsService} from '../services/endpoints.service';
import {ModelsService} from '../services/models.service';
import {Model} from '../shared/model.model';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  providers: [
    EndpointsService,
    ModelsService
  ]
})
export class TopicsComponent implements OnInit {

  kafkaEndpoints: KafkaEndpoint[];
  models: { [key: string]: Model };

  constructor(
    private endpointsService: EndpointsService,
    private modelsService: ModelsService
  ) { }

  ngOnInit() {
    this.endpointsService
      .getKakfaEndpoints()
      .subscribe(endpoints => this.kafkaEndpoints = endpoints);

    this.modelsService
      .getModels()
      .subscribe(models => this.models = models);
  }

}
