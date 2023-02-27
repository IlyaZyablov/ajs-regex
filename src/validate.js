export default class Validate {
  static validateUsername(name) {
    // символы, цифры и пробелы в начале и в конце
    const regexpFirst = /^(?!\d{1}|\s|_|-).+[A-Za-z0-9_-].(?<!\d{1}|\s|_|-)$/;
    // 3 цифры подряд
    const regexpSecond = /\d{3}/g;
    if (name.match(regexpSecond)) {
      return false;
    }
    return regexpFirst.test(name);
  }
}

// console.log(Validate.validateUsername('IlyaZyablov')); // true
// console.log(Validate.validateUsername('-IlyaZyablov')); // false
// console.log(Validate.validateUsername('IlyaZyablov_')); // false
// console.log(Validate.validateUsername('Ilya123Zyablov')); // false
// console.log(Validate.validateUsername('5_IlyaZyablov')); // false
