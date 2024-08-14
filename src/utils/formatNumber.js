export const formatNumber = (num, currency = false) => {
  if (currency) {
    return `₦${num.toLocaleString()}`;
  }
  return num.toLocaleString();
};
