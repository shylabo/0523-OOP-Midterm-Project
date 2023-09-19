export default class ShoppingCart {
  constructor() {
    this.items = []
    this.total = 0
  }

  getItems() {
    return this.items
  }

  setItem(product) {
    this.items.push(product)
  }

  resetCart() {
    this.items = []
  }

  updateTotal() {
    this.total = this.items.reduce((total, item) => total + item.product.price, 0)
    // JavaScript represents floating-point numbers in binary,
    // which can sometimes result in inaccuracies when converting them to their decimal representations.
    this.total = parseFloat(this.total.toFixed(2))
  }

  handleOrderClick() {
    const confirmMessage = `
      Confirm your order: Proceed to checkout?\n
      Total: $${this.total}
      `
    const isConfirmed = confirm(confirmMessage)
    if (isConfirmed) {
      alert('Thank you for shopping!')
      this.resetCart()
      location.reload()
    }
  }

  render() {
    const cartElement = document.createElement('section')
    cartElement.setAttribute('id', 'shopping-cart')
    cartElement.innerHTML = `
      <div id="shopping-cart-content" class="w-full space-y-5 p-4 bg-slate-100">
        <div class="flex items-center justify-between">
          <h2 class="font-bold text-xl">Shopping Cart</h2>
          <div class="flex items-end justify-end gap-x-5">
            <p class="text-lg">Total: <span class="text-2xl font-semibold">$${this.total}</span></p>
            <button id="order-button" class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded focus:outline-none disabled:bg-slate-300" ${
              this.items.length === 0 ? 'disabled' : ''
            }>Order Now</button>
          </div>
        </div>

        <ul class="flex items-center gap-x-5 h-full overflow-x-scroll">
        ${this.items
          .map(
            (item) =>
              `
              <li class="flex flex-col justify-between min-w-[200px] w-[200px] h-[240px] p-4 bg-white border rounded-lg shadow-md hover:shadow-lg">
                <div>
                  <img src="${item.product.image}" alt="${item.product.title}" class="w-full h-[100px] object-contain rounded-md mx-auto mb-4">
                  <h3 class="text-sm font-semibold text-gray-800 line-clamp-2">${item.product.title}</h3>
                </div>
                <p class="text-gray-700 mt-2">Price: $<span class="font-semibold text-lg">${item.product.price}</span></p>
              </li>
              `
          )
          .join('')}
        </ul>
      </div>
      `
    const orderButton = cartElement.querySelector('#order-button')
    orderButton.addEventListener('click', this.handleOrderClick.bind(this))
    return cartElement
  }
}
