import { Hero } from "../entities/Hero";
import { API, apiKey } from "../shared/constants";

class HeroService {

  //THESE ARE METHODES THAT USE FETCH WHICH ARE DEPRECATED BY AXIOS INSTANCE API

  // fetchAll() {
  //   return fetch(
  //     "http://gateway.marvel.com/v1/public/characters?apikey=230dfef498aed52d5b84abc1f9e11d14"
  //   ).then((res) => res.json());
  // }
  // fetch(id) {
  //   return fetch(
  //     `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=230dfef498aed52d5b84abc1f9e11d14`
  //   )
  //     .then((response) => response.json())
  //     .then((rawData) => new Hero(rawData.data.results[0]));
  // }
  // fetchCharComics(id) {
  //   return fetch(
  //     `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?apikey=${apiKey}`
  //   )
  //     .then((response) => response.json())
  //     .then((rawData) => {
  //       console.log(rawData.data.results);
  //       return rawData.data.results;
  //     });
  // }
  // search(name) {
  //   return fetch(
  //     `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&apikey=230dfef498aed52d5b84abc1f9e11d14`
  //   ).then((res) => res.json());
  // }

  fetchAll() {
    return API.get(`/characters?apikey=${apiKey}`)
      .then(response => response.data)
  }

  fetch(id) {
    return API.get(`/characters/${id}?apikey=${apiKey}`)
      .then(response => new Hero(response.data.data.results[0]))
  }

  fetchCharComics(id) {
    return API.get(`/characters/${id}/comics?apikey=${apiKey}`)
      .then(response => response.data.data.results)
  }

  search(name) {
    return API.get(`/characters?nameStartsWith=${name}&apikey=${apiKey}`)
      .then(response => response.data)
  }


}

export const heroService = new HeroService();
