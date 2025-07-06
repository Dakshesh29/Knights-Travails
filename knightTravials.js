function knightMoves(start, end) {
  const move = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  function getKnightMoves(position) {
    const [x, y] = position;
    const validMoves = [];

    for (let [dx, dy] of move) {
      const newX = x + dx;
      const newY = y + dy;

      if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
        validMoves.push([newX, newY]);
      }
    }

    return validMoves;
  }

  const queue = [];
  const visited = new Set();
  const parent = new Map();

  queue.push(start);
  visited.add(start.toString());

  while (queue.length > 0) {
    const current = queue.shift();

    if (current[0] === end[0] && current[1] === end[1]) {
      const path = [];
      let node = end;

      while (node) {
        path.unshift(node);
        node = parent.get(node.toString());
      }

      console.log(`You made it in ${path.length - 1} moves!`);
      console.log("Path:", path.map((p) => `[${p[0]}, ${p[1]}]`).join(" → "));
      return path;
    }

    for (let neighbor of getKnightMoves(current)) {
      const key = neighbor.toString();

      if (!visited.has(key)) {
        visited.add(key);
        parent.set(key, current);
        queue.push(neighbor);
      }
    }
  }
}
knightMoves([0, 0], [3, 3]);

knightMoves([0, 0], [7, 7]);
