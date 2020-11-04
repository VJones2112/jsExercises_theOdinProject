const ftoc = function(f) {
  c = Math.round(((f - 32) * 5.0/9)* 10) /10;
  return c;
}

const ctof = function(c) {
  f = Math.round(((c * 9/5.0) + 32)* 10) /10;
  return f;
}

module.exports = {
  ftoc,
  ctof
}
