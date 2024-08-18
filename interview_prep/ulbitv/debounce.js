const fetchUrl = (url) => console.log(`Fetching ${url}`);

const debounce = (callback, timeout) => {
  const ms = timeout || 1000;
  let timerID;
  return (...args) => {
    if (timerID) clearTimeout(timerID);
    timerID = setTimeout(() => callback(...args), ms);
  };
};

const fetching = debounce(fetchUrl, 100);
fetching(1);
fetching(2);
fetching(3);
fetching(4);
fetching(5);
fetching(7);
fetching(8);
fetching(9);
fetching(10);
fetching(11);
fetching(12);
