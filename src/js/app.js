export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    return /[\w-]/.test(this.name) && !/\d{4}/.test(this.name) && /^[^\d-_]/.test(this.name) && /[^\d-_]$/.test(this.name);
  }
}
