import { Hero } from "../entities/Hero";

export class HeroService {
  fetchAll() {
    return fetch(
      "http://gateway.marvel.com/v1/public/characters?apikey=230dfef498aed52d5b84abc1f9e11d14"
    ).then((res) => res.json());
  }

  fetch(id) {
    return fetch(
      `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=230dfef498aed52d5b84abc1f9e11d14`
    )
      .then((response) => response.json())
      .then((rawData) => new Hero(rawData.data.results[0]));
  }

  search(name) {
    return fetch(
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&apikey=230dfef498aed52d5b84abc1f9e11d14`
    ).then((res) => res.json());
  }
}
