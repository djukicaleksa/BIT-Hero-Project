const fetchAll = () => {
  return fetch(
    "http://gateway.marvel.com/v1/public/characters?apikey=230dfef498aed52d5b84abc1f9e11d14"
  ).then((res) => res.json());
};

export { fetchAll };
