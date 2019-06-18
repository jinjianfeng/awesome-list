function toFixed(number, decimals) {
  var x = Math.pow(10, Number(decimals) + 1);
  return (Number(number) + 1 / x).toFixed(decimals);
}
