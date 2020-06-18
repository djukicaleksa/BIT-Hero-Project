class ComicService {
  fetch(id) {
    return fetch(
      `https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=230dfef498aed52d5b84abc1f9e11d14`
    ).then((rawData) => rawData.json());
  }
}
export { ComicService };
