//store every new character in memory(to be used as a key with a value of one), and if we find another one, then we add to the value that is stored

function count(string) {
  const store = {};
  for (let i = 0; i < string.length; i++) {
    store[string[i]] ? (store[string[i]] += 1) : (store[string[i]] = 1);
  }
  return store;
}
