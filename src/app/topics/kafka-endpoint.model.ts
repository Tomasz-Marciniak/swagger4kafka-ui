export class KafkaEndpoint {
  constructor(
    public topic: string,
    public payloadType: string,
    public payloadExample: object
  ) { }
}
