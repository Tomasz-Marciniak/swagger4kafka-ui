import {Component, Input, OnInit} from '@angular/core';
import {KafkaEndpoint} from '../../shared/kafka-endpoint.model';
import {Model} from '../../shared/model.model';
import {DocumentationService} from '../../shared/documentation.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  @Input() private endpoint: KafkaEndpoint;
  model: Model;
  defaultExampleValue: string;
  exampleLineCount: number;
  isOpen = false;

  constructor(private documentationService: DocumentationService) { }

  ngOnInit() {
    this.model = this.documentationService.getModel(this.endpoint.payloadType);
    this.defaultExampleValue = JSON.stringify(this.endpoint.payloadExample, null, 2);
    this.exampleLineCount = 1 + this.defaultExampleValue.split('\n').length;
  }

}
