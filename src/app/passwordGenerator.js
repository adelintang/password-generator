export const passwordGenerator = (length) => {
  const alphaNum = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';

  if (length < 6) return 'Rentang terlalu pendek';

  for (let i=0; i < length; i++) {
      result += alphaNum[Math.floor(Math.random() * alphaNum.length)];
  }
  
  return result;
}