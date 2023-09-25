import ProductList from './product-list.js'
import ShoppingCart from './shopping-cart.js'
import { app } from './app.js'

export default class Shop {
  constructor() {
    this.productList = new ProductList()
    this.shoppingCart = new ShoppingCart()
  }

  addProductToCart(product) {
    this.shoppingCart.setItem({ product })
    this.shoppingCart.updateTotal()

    const shoppingCartContent = app.rootElement.querySelector('#shopping-cart-content')
    shoppingCartContent.remove()

    const shoppingCart = app.rootElement.querySelector('#shopping-cart')
    shoppingCart.appendChild(this.shoppingCart.render())
  }

  render() {
    const shopElement = document.createElement('div')
    shopElement.appendChild(this.shoppingCart.render())
    shopElement.appendChild(this.productList.render())
    return shopElement
  }
}
