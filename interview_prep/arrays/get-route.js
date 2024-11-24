/**
 * Дан массив билетов:
   [
    { from: 'Astana', to: 'Bali' },
    { from: 'Moscow', to: 'Astana' },
    { from: 'Bali', to: 'SPb' },
   ]

   Нужно расположить их один за другим чтобы получился непрерывный маршрут:
  [
    { from: 'Moscow', to: 'Astana' },
    { from: 'Astana', to: 'Bali' },
    { from: 'Bali', to: 'SPb' }
  ]
 */
{
  const getRoute = (tickets) => {
    const fromMap = new Map();
    const toMap = new Map();

    tickets.forEach((ticket) => {
      fromMap.set(ticket.from, ticket);
      toMap.set(ticket.to, ticket);
    });

    let start = tickets.find((ticket) => !toMap.has(ticket.from));

    const result = [];
    while (start) {
      result.push(start);
      start = fromMap.get(start.to);
    }

    return result;
  };

  console.log(
    getRoute([
      { from: 'Astana', to: 'Bali' },
      { from: 'Bali', to: 'SPb' },
      { from: 'Moscow', to: 'Astana' },
    ]),
  );
}
{
  const getRoute = (tickets) => {
    const startPoint = tickets.find(
      (ticket) => !tickets.some((other) => other.to === ticket.from),
    );

    return tickets.reduce(
      (routes, _) => {
        const lastTo = routes[routes.length - 1].to;
        const nextTicket = tickets.find((ticket) => ticket.from === lastTo);
        if (nextTicket) routes.push(nextTicket);
        return routes;
      },
      [startPoint],
    );
  };

  console.log(
    getRoute([
      { from: 'Astana', to: 'Bali' },
      { from: 'Moscow', to: 'Astana' },
      { from: 'Bali', to: 'SPb' },
    ]),
  );
}
{
  const getRoute = (tickets) => {
    const from = {};
    const to = {};
    const result = [];

    for (const path of tickets) {
      from[path.from] = path;
      to[path.to] = path;
    }

    for (const path of tickets) {
      if (!to[path.from] && from[path.from]) {
        result.push(path);
        break;
      }
    }

    while (result.length !== tickets.length) {
      const lastPath = result[result.length - 1];

      result.push(from[lastPath.to]);
    }

    return result;
  };

  console.log(
    getRoute([
      { from: 'Astana', to: 'Bali' },
      { from: 'Moscow', to: 'Astana' },
      { from: 'Bali', to: 'SPb' },
    ]),
  );
}
