import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["field"]

  toggle(event) {
    let type = this.fieldTarget.getAttribute("type")
    if (type === "password") {
      this.show(event)
    } else {
      this.hide(event)
    }
  }

  show(event) {
    event.target.textContent = "Hide"
    this.fieldTarget.setAttribute("type", "text")
  }

  hide(event) {
    event.target.textContent = "Show"
    this.fieldTarget.setAttribute("type", "password")
  }
}