const generateItem = require("../js/utils.js");

describe("generateItem", () => {
  it("should generate item for the list of wines with the correct content", () => {
    const response = {
      name: "Chardonnay",
      img: "path/to/img",
      price: "$12.99",
    };

    const expect_item = document.createElement("li");
    const expect_content = `<h2>${response.name}</h2><img src="${response.img}" alt="${response.name}"><p class="product-price">${response.price}</p>`;

    expect_item.innerHTML = expect_content;
    const generatedItem = generateItem(response);

    expect(generatedItem).toEqual(expect_item);
  });
});
