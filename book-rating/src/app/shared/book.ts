export class Book {
  constructor(
    public isbn: string,
    public title: string,
    public desciption: string,
    public rating = 0
  ) { }

  // toString() {
  //   return this.title;
  // }
}
