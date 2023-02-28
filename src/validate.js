export default class Validate {
  static validateUsername(name) {
    // латинские буквы
    const allowLatin = /[a-zA-Z]+/g.test(name);
    // цифры
    const allowDigits = /[0-9]+/g.test(name);
    // нижнее подчеркивание и дефис
    const allowDash = /[_-]+/g.test(name);
    // запрещены цифры, пробелы, нижнее подчеркивание и дефис в начале
    const exeptDigitsSpacesDashesBeforeAndAfter = /^(?!\d{1}|\s|_|-).+\w.(?<!\d{1}|\s|_|-)$/;
    // запрещены 3 цифры подряд
    const exeptThreeNumbersInRow = /\d{3}/g;
    // const regexpFirst = /^(?!\d{1}|\s|_|-).+[A-Za-z0-9_-].(?<!\d{1}|\s|_|-)$/;
    if (name.match(exeptThreeNumbersInRow) || !name.match(exeptDigitsSpacesDashesBeforeAndAfter)) {
      return false;
    }
    if (!allowLatin && !allowDigits && !allowDash) {
      return false;
    }
    return true;
  }
}

// console.log(Validate.validateUsername('IlyaZyablov')); // true
// console.log(Validate.validateUsername('-IlyaZyablov')); // false
// console.log(Validate.validateUsername('IlyaZyablov_')); // false
// console.log(Validate.validateUsername('Ilya123Zyablov')); // false
// console.log(Validate.validateUsername('5_IlyaZyablov')); // false
// console.log(Validate.validateUsername('ИльяЗяблов')); // false
// console.log(Validate.validateUsername('IlyaЗяблов')); // false
// console.log(Validate.validateUsername('Ilya_Zyablov')); // true
