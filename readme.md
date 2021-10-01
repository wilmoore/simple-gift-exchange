# simple-gift-exchange

[![example workflow](https://github.com/wilmoore/simple-gift-exchange/actions/workflows/node.js.yml/badge.svg)](https://github.com/wilmoore/simple-gift-exchange/actions/workflows/node.js.yml) [![NPM version](http://img.shields.io/npm/v/simple-gift-exchange.svg)](https://www.npmjs.org/package/simple-gift-exchange) [![NPM downloads](http://img.shields.io/npm/dm/simple-gift-exchange.svg)](https://www.npmjs.org/package/simple-gift-exchange) [![LICENSE](http://img.shields.io/npm/l/simple-gift-exchange.svg)](license)

> Simple JavaScript API to create a randomized gift exchange list given a list of at least 3 participants

    $ npm install simple-gift-exchange --save

## API Usage Example
> see [`example.js`](./example.js) for further detail

```
const { giftlist } = require('simple-gift-exchange')
const exchange = giftlist(['Susan', 'Beth', 'Abe', 'Ardi', 'Quan'])
console.log(exchange)

[
  [ 'Susan', 'Beth' ],
  [ 'Beth', 'Quan' ],
  [ 'Quan', 'Ardi' ],
  [ 'Ardi', 'Abe' ],
  [ 'Abe', 'Susan' ]
]
```

## How It Works

A library for automating the creation of a gift exchange list where each member of the group has to both give and receive a gift randomly from among the others.

###### rules

1. one can not receive a gift from the same person to whom they give a gift
2. one can not receive a gift from self

###### example input:
```
['Susan', 'Beth', 'Abe', 'Ardi', 'Quan']
```

###### example output:
```
Abe gives a gift to Quan
Ardi gives a gift to Beth
Susan gives a gift to Abe
Quan gives a gift to Ardi
Beth gives a gift to Susan
```

## Testing

    npm test

## License

  [MIT](license)
