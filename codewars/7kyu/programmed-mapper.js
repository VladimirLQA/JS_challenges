{
  const mapEmUp = (input, mappers) => {
    const result = [];
    input.forEach((el) => {
      let matched = true;

      mappers.forEach(([predicate, mapper]) => {
        if (matched && predicate(el)) {
          result.push(mapper(el));
          matched = false;
        }
      });

      if (matched) result.push(-1);
    });
    return result;
  };

  console.log(
    mapEmUp(
      [1, 2, 3],
      [
        [
          function(i) {
            return i > 2;
          },
          function(i) {
            return i;
          },
        ],
        [
          function(i) {
            return i < 2;
          },
          function() {
            return 0;
          },
        ],
      ],
    ),
  );
}

{
  const mapEmUp = (input, mappers) =>
    input.map((el) => {
      for (const [predicate, mapper] of mappers) {
        if (predicate(el)) return mapper(el);
      }
      return -1;
    });

  console.log(
    mapEmUp(
      [1, 2, 3],
      [
        [
          function(i) {
            return i > 2;
          },
          function(i) {
            return i;
          },
        ],
        [
          function(i) {
            return i < 2;
          },
          function() {
            return 0;
          },
        ],
      ],
    ),
  );
}
{
  const mapEmUp = (input, mappers) =>
    input.map((el) => {
      const found = mappers.find(([predicate, _]) => predicate(el));
      return found ? found[1](el) : -1;
    });

  console.log(
    mapEmUp(
      [1, 2, 3],
      [
        [
          function(i) {
            return i > 2;
          },
          function(i) {
            return i;
          },
        ],
        [
          function(i) {
            return i < 2;
          },
          function() {
            return 0;
          },
        ],
      ],
    ),
  );
}
