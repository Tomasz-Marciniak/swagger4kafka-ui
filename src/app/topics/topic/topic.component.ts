import {Component, Input, OnInit} from '@angular/core';
import {KafkaEndpoint} from '../kafka-endpoint.model';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  @Input() private endpoint: KafkaEndpoint;
  private defaultExampleValue: string;
  private exampleLineCount: number;
  private isOpen = false;

  constructor() { }

  ngOnInit() {
    this.defaultExampleValue = JSON.stringify(this.endpoint.payloadExample, null, 2);
    this.exampleLineCount = 1 + this.defaultExampleValue.split('\n').length;
  }

}
