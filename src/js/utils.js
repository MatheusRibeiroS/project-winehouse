/**
 *  Generate item for the list of wines
 *
 * @param {params} Object with the following properties:
 *  - {string} name
 *  - {string} img source
 *  - {string} price
 */
function generateItem({ name, img, price }) {
  const item = document.createElement("li");
  const content = `<h2>${name}</h2><img src="${img}" alt="${name}"><p class="product-price">${price}</p>`;

  return (item.innerHTML = content) && item;
}

module.exports = generateItem;
