// ===== CART CLASS =====
class Cart {
  constructor() {
    this.items = [];
  }

  add(product) {
    const existing = this.items.find(item => item.id === product.id);

    if (existing) {
      existing.qty++;
    } else {
      this.items.push(new CartItem(product.id, product.name, product.price));
    }

    this.render();
  }

  remove(id) {
    this.items = this.items.filter(item => item.id !== id);
    this.render();
  }

  getTotal() {
    return this.items.reduce((total, item) => {
      return total + item.price * item.qty;
    }, 0);
  }

    
  render() {
    const cartDiv = document.getElementById("cart");
    const totalDiv = document.getElementById("total");

    cartDiv.innerHTML = "";

    this.items.forEach(item => {
      cartDiv.innerHTML += `
        <div class="card">
          <h4>${item.name}</h4>
          <p>Rs ${item.price}</p>
          <p>Qty: ${item.qty}</p>
          <button onclick="cart.remove(${item.id})">Remove</button>
        </div>
      `;
    });

    totalDiv.innerText = "Total: Rs " + this.getTotal();
  }
}