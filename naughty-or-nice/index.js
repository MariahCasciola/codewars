function naughtyOrNice(data) {
  let nice = 0;
  let naughty = 0;
  for (let month in data) {
    let santasList = Object.values(data[month]);
    for (let i = 0; i < santasList.length; i++) {
      if (santasList[i] === "Naughty") {
        naughty++;
      }
      if (santasList[i] === "Nice") {
        nice++;
      }
    }
  }
  if (nice > naughty) return "Nice!";
  if (naughty > nice) return "Naughty!";
  return "Nice!";
}
