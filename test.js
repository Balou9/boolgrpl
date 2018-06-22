var tape = require('tape')
var boolgrp = require('./index.js')
var names = ['Mikey', 'Allday', 'Mikey','Everyday', '419', 'Allday', '419']

tape('Output boolgrp', function (t) {
  t.ok(boolgrp(names, '419'))
  t.end()
})
