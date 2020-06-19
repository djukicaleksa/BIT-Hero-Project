import { API,apiKey } from '../shared/constants';


class ComicService {
  //This is fetch request that has been deprecated by AXIOS 
  // fetch(id) {
  //   return fetch(
  //     `https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=${apiKey}`
  //   ).then((rawData) => rawData.json());
  // }

  fetchAxios(id) {

    return API.get(`/comics/${id}?apikey=${apiKey}`)
      .then(response => response.data);


  }
}


export { ComicService };
