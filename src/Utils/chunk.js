/* eslint-disable no-extend-native */
Array.prototype.chunk = function (n) {
  if (!this.length) {
    return []
  }
  return [ this.slice(0, n) ].concat(this.slice(n).chunk(n))
}
