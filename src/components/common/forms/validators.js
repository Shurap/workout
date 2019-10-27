// export const required = value => {
//   if (value) return undefined;
//   return 'Field is required';
// }

export const required = (text) => value => {
  if (value) return undefined;
  return text;
}

export const minLength = (text) => value => {
  if (value && value.length < 7) return text;
  return undefined;
}

export const emailTrue = (text) => value => {
  if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) return text;
  return undefined;
}