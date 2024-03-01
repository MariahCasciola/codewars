function naughtyOrNice(data) {
  let nice = 0;
  let naughty = 0;
  for (let month in data) {
    for (let day in month) {
      if (data[month][day] === "Naughty") {
        naughty++;
      } else {
        nice++;
      }
    }
  }
  if (nice > naughty) return "Nice!";
  if (naughty > nice) return "Naughty!";
  return "Nice!";
}
