import {Component, Input, OnInit} from '@angular/core';
import {KafkaEndpoint} from '../../shared/kafka-endpoint.model';
import {Model} from '../../shared/model.model';
import {PublisherService} from '../../services/publisher.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
  providers: [PublisherService]
})
export class TopicComponent implements OnInit {
  @Input() endpoint: KafkaEndpoint;
  @Input() model: Model;

  defaultExampleValue: string;
  exampleLineCount: number;

  isOpen = false;

  constructor(private publisherService: PublisherService) { }

  ngOnInit() {
    this.defaultExampleValue = JSON.stringify(this.endpoint.payloadExample, null, 2);
    this.exampleLineCount = 1 + this.defaultExampleValue.split('\n').length;
  }

  publish(payloadString: string): void {
    const payload = JSON.parse(payloadString);

    this.publisherService
      .publish(this.endpoint.topic, payload)
      .subscribe();
  }

}
