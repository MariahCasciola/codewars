function cakes(recipe, available) {
  const ingredients = Object.keys(recipe).map((ingredient) => {
    if (!available[ingredient]) return 0;
    return Math.floor(available[ingredient] / recipe[ingredient]);
  });
  return Math.min(...ingredients);
}
