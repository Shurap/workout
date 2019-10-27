// export const required = value => {
//   if (value) return undefined;
//   return 'Field is required';
// }

export const required = (text) => value => {
  console.log('run function required:', text, value)
  if (value) return undefined;
  return text;
}