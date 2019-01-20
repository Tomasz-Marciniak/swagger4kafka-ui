import {Component, Input, OnInit} from '@angular/core';
import {KafkaEndpoint} from '../../shared/kafka-endpoint.model';
import {Model} from '../../shared/model.model';
import {PublisherService} from '../../services/publisher.service';
import {ModelsService} from '../../services/models.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
  providers: [PublisherService]
})
export class TopicComponent implements OnInit {
  @Input() endpoint: KafkaEndpoint;
  model: Model;

  defaultExampleValue: string;
  exampleLineCount: number;

  isOpen = false;

  constructor(
    private modelsService: ModelsService,
    private publisherService: PublisherService
  ) { }

  ngOnInit() {
    this.modelsService
      .getModels()
      .subscribe(models => this.model = models[this.endpoint.payloadModelName]);

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
