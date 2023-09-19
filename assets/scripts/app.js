import Shop from './shop.js'
class App {
  constructor() {
    this.shop = new Shop()
    this.rootElement = document.getElementById('app')
  }

  init() {
    this.rootElement.appendChild(this.shop.render())
  }

  addProductToCart(product) {
    this.shop.shoppingCart.setItem({ product })
    this.shop.shoppingCart.updateTotal()

    const shoppingCartContent = this.rootElement.querySelector('#shopping-cart-content')
    shoppingCartContent.remove()

    const shoppingCart = this.rootElement.querySelector('#shopping-cart')
    shoppingCart.appendChild(this.shop.shoppingCart.render())
  }
}

export const app = new App()
app.init()
