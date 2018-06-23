var boolgrpl = require('./index.js')
var names = ['Mikey', 'Allday', 'Mikey','Everyday', '419', 'Allday', '419']


boolgrpl(names, 'Mikey', function (err, data) {
  console.log(data)
})
