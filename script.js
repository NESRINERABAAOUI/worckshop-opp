// Classe pour un Produit
class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  // Classe pour un Élément du Panier
  class ShoppingCartItem {
    constructor(product, quantity = 1) {
      this.product = product;
      this.quantity = quantity;
    }
  
    // Méthode pour calculer le prix total de l'élément
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }
  
  // Classe pour le Panier d'Achat
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    // Ajouter un élément au panier
    addItem(product, quantity = 1) {
      const existingItem = this.items.find((item) => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.items.push(new ShoppingCartItem(product, quantity));
      }
    }
  
    // Supprimer un élément du panier
    removeItem(productId) {
      this.items = this.items.filter((item) => item.product.id !== productId);
    }
  
    // Obtenir le total des éléments à l'intérieur du panier
    getTotalItems() {
      return this.items.reduce((total, item) => total + item.quantity, 0);
    }
  
    // Calculer le prix total du panier
    getTotalPrice() {
      return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
  
    // Afficher les éléments du panier
    displayCart() {
      console.log("Panier :");
      this.items.forEach((item, index) => {
        console.log(
          `${index + 1}. ${item.product.name} - ${item.quantity} x ${item.product.price}dt = ${item.getTotalPrice()}dt`
        );
      });
      console.log(`Total des produits : ${this.getTotalItems()}`);
      console.log(`Prix total : ${this.getTotalPrice()}dt`);
    }
  }
  
  // Tests
  
  // Création de produits
  const product1 = new Product(1, "PHONE 1", 100);
  const product2 = new Product(2, "PHONE 2", 200);
  const product3 = new Product(3, "PHONE 3", 300);
  
  // Création du panier d'achat
  const cart = new ShoppingCart();
  
  // Ajouter des éléments au panier
  cart.addItem(product1, 2); // Ajoute 2 PHONE 1
  cart.addItem(product2, 1); // Ajoute 1 PHONE 2
  cart.addItem(product3, 3); // Ajoute 3 PHONE 3
  
  // Afficher le panier
  cart.displayCart();
  
  // Supprimer un élément du panier
  cart.removeItem(2); // Supprime PHONE 2
  
  // Afficher le panier mis à jour
  cart.displayCart();
  