const products = [
  new Product(1, "Shirt", 1200),
  new Product(2, "Shoes", 3000),
  new Product(3, "Crocery", 6000),
  new Product(4, "Watch", 2500),
  new Product(5, "Cap", 800)
];

const cart = new Cart();

function renderProducts() {
  const productDiv = document.getElementById("products");

  products.forEach((p, index) => {
    productDiv.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>Rs ${p.price}</p>
        <button onclick="cart.add(products[${index}])">
          Add to Cart
        </button>
      </div>
    `;
  });
}

renderProducts();
