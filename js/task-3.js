class StringBuilder {
  constructor(initialValue) {
    this.value = initialValue;
  }

  getValue() {
    return this.value;
  }

  padEnd(str) {
    this.value += str;
  }

  padStart(str) {
    this.value = str + this.value;
  }

  padBoth(str) {
    this.value = str + this.value + str;
  }
}

const builder = new StringBuilder("Hello");
console.log(builder.getValue()); // "Hello"

builder.padEnd(" world");
console.log(builder.getValue()); // "Hello world"

builder.padStart("Greetings, ");
console.log(builder.getValue()); // "Greetings, Hello world"

builder.padBoth("!!! ");
console.log(builder.getValue()); // "!!! Greetings, Hello world !!!"
