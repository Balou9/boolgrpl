var tape = require('tape')
var boolgrp = require('./index.js')
var names = ['Mikey', 'Allday', 'Mikey','Everyday', '419', 'Allday', '419']


tape('Output boolgrp', function (t) {
  boolgrp(names, '419', function (err, data){
    if (err) return err
    t.ok(data)
  })
  t.end()
})
