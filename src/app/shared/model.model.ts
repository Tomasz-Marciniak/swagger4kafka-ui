export class Model {
  constructor(
    public type: string,
    public properties: {
      [key: string]: {
        type: string,
        [key: string]: any
      }
    }
  ) {}
}
