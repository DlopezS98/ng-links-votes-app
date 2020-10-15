export class Link {
  title: string;
  link: string;
  votes: number;

  // Constructor de la clase
  //Parametros que se pasaran al crear la clase y parametros opcionales
  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  //Métodos de la clase...
  IncrementVotes() {
    this.votes++;
  }

  DecrementVotes() {
    this.votes != 0 
    ? this.votes-- 
    : this.votes 
  }
}
