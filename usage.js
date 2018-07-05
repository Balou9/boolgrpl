var boolgrpl = require('./index.js')
var names = ['Mikey', 'Allday', 'Mikey','Everyday', '419', 'Allday', '419']

boolgrpl(names, 'Mikey', function (err, data) {
  if (err) throw err
  console.log('Mikey grep', data)
})

boolgrpl(names, 'Allday', function (err, data) {
  if (err) throw err
  console.log('Allday grep', data)
})
