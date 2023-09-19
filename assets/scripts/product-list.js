import ProductItem from './product-item.js'

export default class ProductList {
  constructor() {
    this.products = []
  }

  async fetchProducts() {
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      data.forEach((item) => this.setProduct(item))
    } catch (error) {
      throw new Error('Error fetching products:', error)
    }
  }

  setProduct(product) {
    this.products.push(product)
  }

  render() {
    const productListElement = document.createElement('ul')
    productListElement.classList.add(
      'container',
      'mx-auto',
      'py-5',
      'px-5',
      'sm:px-0',
      'lg:px-5',
      'grid',
      'grid-cols-1',
      'sm:grid-cols-2',
      'md:grid-cols-3',
      'lg:grid-cols-4',
      'gap-4'
    )
    this.fetchProducts().then(() => {
      this.products.forEach((product) => {
        const productItem = new ProductItem(product)
        productListElement.appendChild(productItem.render())
      })
    })
    return productListElement
  }
}
