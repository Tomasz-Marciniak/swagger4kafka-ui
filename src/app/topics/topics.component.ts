import { Component, OnInit } from '@angular/core';
import {KafkaEndpoint} from './kafka-endpoint.model';
import {DocumentationService} from '../documentation.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
})
export class TopicsComponent implements OnInit {

  kafkaEndpoints: KafkaEndpoint[];

  constructor(private documentationService: DocumentationService) { }

  ngOnInit() {
    this.kafkaEndpoints = this.documentationService.getKakfaEndpoints();
  }

}
