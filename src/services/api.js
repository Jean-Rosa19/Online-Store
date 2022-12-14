export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories').then((res) => res.json()).then(((data) => data));
}

export async function getProductsFromCategoryAndQuery(id, query) {
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${id}&q=${query}`).then((res) => res.json()).then((data) => data);
}

export async function getProductsByName(query) {
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`).then((res) => res.json()).then((data) => data);
}

export async function getProductsByCategory(id) {
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${id}`).then((res) => res.json()).then((data) => data);
}

export async function getProductsByID(id) {
  return fetch(`https://api.mercadolibre.com/items/${id}`).then((res) => res.json()).then((data) => data);
}
