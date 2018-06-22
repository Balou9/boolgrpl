function boolgrp (arr, pattern) {
  return arr.map(function (each) {
    if (each === pattern) return true
    else return false
  })
}

module.exports = boolgrp
