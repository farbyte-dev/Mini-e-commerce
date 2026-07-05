
// ===== BASE CLASS =====
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// ===== CHILD CLASS =====
class CartItem extends Product {
  constructor(id, name, price, qty = 1) {
    super(id, name, price);
    this.qty = qty;
  }
}