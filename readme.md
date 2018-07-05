# boolgrpl

[![build status](http://img.shields.io/travis/Balou9/boolgrpl.svg?style=flat)](https://travis-ci.org/Balou9/boolgrpl) [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/Balou9/boolgrpl?branch=master&svg=true)](https://ci.appveyor.com/project/Balou9/boolgrpl)

***

boolgrpl performs an boolean pattern match  

***

## Get it!

```
npm install --save boolgrpl
```

### Usage

```js
var boolgrpl = require('boolgrpl')
var names = ['Mikey', 'Tiffany', 'Lebron James',
             'Lebron James', 'Mikey', 'Tiffany']

boolgrpl(names, 'Tiffany', function (err, data) {
  if (err) throw err
  console.log(data)
})
```

***

## API

### `igrp(arr, pattern, value)`

***

## License

[MIT](./license.md)
