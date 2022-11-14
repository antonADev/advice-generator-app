export const fetchData = () => {
  return fetch(`https://api.adviceslip.com/advice?=${Math.random()}`).then(
    (res) => res.json()
  );
};
