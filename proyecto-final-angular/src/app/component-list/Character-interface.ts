export interface CharacterInterface {
  id: number;
  name: string;
  status: string;
  image: string;
  url: string;
  species: string;
  //location:string;
}

export interface CharacterResponseInterface {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  }
  results: CharacterInterface[];
}
