import Product from './product.js'
import { app } from './app.js'

export default class ProductItem {
  constructor({ id, title, price, description, image }) {
    this.product = new Product(id, title, price, description, image)
  }

  addToCart() {
    app.addProductToCart(this.product)
  }

  handleAddToCartClick() {
    this.addToCart()
  }

  render() {
    const productElement = document.createElement('li')
    productElement.innerHTML = `
        <div class="flex flex-col gap-y-10 justify-between w-full h-full p-4 bg-white border rounded-lg shadow-md hover:shadow-lg">
          <div>
            <img src="${this.product.image}" alt="${this.product.title}" class="w-full h-[200px] object-contain rounded-md mx-auto mb-4">
            <h3 class="text-lg font-semibold text-gray-800 line-clamp-2">${this.product.title}</h3>
            <p class="text-gray-600 line-clamp-3">${this.product.description}</p>
            </div>
          <div class="flex items-end justify-between">
            <p class="text-gray-700 font-semibold text-2xl mt-2">$${this.product.price}</p>
            <button id="add-to-cart-button" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none" >Add to Cart</button>
          </div>
        </div>
      `
    const addToCartButton = productElement.querySelector('#add-to-cart-button')
    addToCartButton.addEventListener('click', this.handleAddToCartClick.bind(this))
    return productElement
  }
}
