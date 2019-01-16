export class Model {
  constructor(
    public type: string,
    public properties: {
      [key: string]: {
        type: string,
        format?: string
        enum?: any[]
        [key: string]: any
      }
    }
  ) {}
}
