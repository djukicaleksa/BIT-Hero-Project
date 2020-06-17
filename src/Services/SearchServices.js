const fetchAllSearches = (name) => {
  return fetch(
    `https://gateway.marvel.com:443/v1/public/characters?name=${name}&apikey=230dfef498aed52d5b84abc1f9e11d14`
  ).then((res) => res.json());
};
export { fetchAllSearches };
