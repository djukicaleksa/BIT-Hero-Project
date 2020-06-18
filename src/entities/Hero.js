export class Hero {
  constructor(apiHero) {
    this.id = apiHero.id;
    this.name = apiHero.name;
    this.avatar = `${apiHero.thumbnail.path}.${apiHero.thumbnail.extension}`;
    this.appears = apiHero.comics.available;
    this.lastModified = apiHero.urls[1].url;
    this.details = apiHero.urls[0].url;
  }
}
