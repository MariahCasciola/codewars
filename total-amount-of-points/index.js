function points(games) {
  let scoreX = 0;
  for (let matches of games) {
    let x = parseInt(matches.slice(0, 1));
    let y = parseInt(matches.slice(2, 3));
    if (x === y) scoreX++;
    if (x > y) scoreX += 3;
    if (x < y) scoreX += 0;
  }
  return scoreX;
}
