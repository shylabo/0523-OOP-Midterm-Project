import ProductList from './product-list.js'
import ShoppingCart from './shopping-cart.js'

export default class Shop {
  constructor() {
    this.productList = new ProductList()
    this.shoppingCart = new ShoppingCart()
  }

  render() {
    const shopElement = document.createElement('div')
    shopElement.appendChild(this.shoppingCart.render())
    shopElement.appendChild(this.productList.render())
    return shopElement
  }
}
