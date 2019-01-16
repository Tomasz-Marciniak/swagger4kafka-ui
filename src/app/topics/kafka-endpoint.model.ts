export class KafkaEndpoint {
  constructor(
    public topic: String,
    public payloadType: String,
    public payloadExample: object
  ) { }
}
