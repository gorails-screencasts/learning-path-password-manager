import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["length", "lowercase", "uppercase", "numbers", "specialchars", "field"]

  static values = {
    length: { type: Number, default: 24 },
    lowercase: { type: Boolean, default: true },
    uppercase: { type: Boolean, default: true },
    numbers: { type: Boolean, default: true },
    specialchars: { type: Boolean, default: true },
  }

  connect() {
    this.lengthTarget.value = this.lengthValue
    this.lowercaseTarget.checked = this.lowercaseValue
    this.uppercaseTarget.checked = this.uppercaseValue
    this.numbersTarget.checked = this.numbersValue
    this.specialcharsTarget.checked = this.specialcharsValue
  }

  generate(event) {
    this.fieldTarget.value = this.generatePassword()
  }

  generatePassword() {
    let password = ""

    for (var i = 0; i <= this.lengthValue; i++) {
      let number = Math.floor(Math.random() * this.alphabet.length)
      password += this.alphabet.substring(number, number + 1)
    }

    return password
  }

  get alphabet() {
    let alphabet = ""
    if (this.lowercaseValue) alphabet += "abcdefghijklmnopqrstuvwxyz"
    if (this.uppercaseValue) alphabet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (this.numbersValue) alphabet += "1234567890"
    if (this.specialcharsValue) alphabet += "!@#$%^&*()"
    return alphabet
  }

  lengthUpdated(event) {
    this.lengthValue = event.target.value
  }

  lowercaseUpdated(event) {
    this.lowercaseValue = event.target.checked
  }

  uppercaseUpdated(event) {
    this.uppercaseValue = event.target.checked
  }

  numbersUpdated(event) {
    this.numbersValue = event.target.checked
  }

  specialcharsUpdated(event) {
    this.specialcharsValue = event.target.checked
  }
}