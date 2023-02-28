import Validate from '../validate';

test.each([
  ['IlyaZyablov', true],
  ['-IlyaZyablov', false],
  ['IlyaZyablov_', false],
  ['Ilya123Zyablov', false],
  ['5_IlyaZyablov', false],
  ['ИльяЗяблов', false],
  ['IlyaЗяблов', false],
  ['Ilya_Zyablov', true],
])('Validate status for name %s', (name, status) => {
  const data = Validate.validateUsername(name);
  expect(data).toEqual(status);
});
