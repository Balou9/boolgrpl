var tape = require('tape')
var boolgrpl = require('./index.js')
var names = ['Mikey', 'Allday', 'Mikey','Everyday', '419', 'Allday', '419']


tape('Output boolgrp', function (t) {
  boolgrpl(names, '419', function (err, data){
    if (err) return err
    t.ok(data)
  })
  t.end()
})

tape('Array Error', function (t) {

  t.throws(boolgrpl.bind(null, 'names', 'Mikey'))
  t.end()
})

tape('Pattern Error', function (t) {

  t.throws(boolgrpl.bind(null, names, 'sdsd'))
  t.end()
})
