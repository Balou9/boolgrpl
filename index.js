function booler (arr, pattern) {
  return arr.map(function (each) {
    if (each === pattern) return true
    else return false
  })
}

function boolgrpl (arr, pattern, callback) {
    if (!arr) throw new TypeError('First argument should be array.')
    callback(null, booler(arr, pattern))
}

module.exports = boolgrpl
