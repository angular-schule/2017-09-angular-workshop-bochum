export class Book {
  constructor(
    public isbn: string,
    public title: string,
    public description: string,
    public rating = 0
  ) { }

  // toString() {
  //   return this.title;
  // }

  rateUp() {
    if (this.rating < 5) {
      this.rating++;
    }
  }

  rateDown() {
    if (this.rating > 0) {
      this.rating--;
    }
  }
}
