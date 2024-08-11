export const formatNumber = (num, currency = false) => {
  if (currency) {
    return `N${num.toLocaleString()}`;
  }
  return num.toLocaleString();
};
