import Shop from "./shop.js"
class App {
  constructor() {
    this.shop = new Shop()
    this.rootElement = document.getElementById("app")
  }

  init() {
    this.rootElement.appendChild(this.shop.render())
  }
}

export const app = new App()
app.init()
