const person = {
  name: "John",
  greet: () => {
    return this.name;
  }
};
person.greet();