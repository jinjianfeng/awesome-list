function toFixed (number, base) {
  const pow = Math.pow(base || 10, number);
  return Math.round(this * pow) / pow;
};

