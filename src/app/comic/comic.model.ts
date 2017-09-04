export class Comic {
  constructor(
      public title: string,
      public imageUrl: string,
      public creators: string[],
      public description: string,
      public characters?: string[]
      ) {}
}
