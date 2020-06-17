export class Hero {
  constructor(apiHero) {
    this.id = apiHero.id;
    this.name = apiHero.name;
    this.avatar = `${apiHero.thumbnail.path}.${apiHero.thumbnail.extension}`;
  }
}
