var boolgrp = require('./index.js')
var names = ['Mikey', 'Allday', 'Mikey','Everyday', '419', 'Allday', '419']

function testBoolgrp (arr) {
  return {
    'default': boolgrp(arr, 'Mikey')
  }
}

console.log(testBoolgrp(names))
