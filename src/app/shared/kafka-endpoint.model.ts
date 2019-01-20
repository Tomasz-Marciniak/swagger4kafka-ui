export class KafkaEndpoint {
  constructor(
    public topic: string,
    public payloadModelName: string,
    public payloadExample: object
  ) { }
}
