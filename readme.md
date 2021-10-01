# simple-gift-exchange

[![Build Status](http://img.shields.io/travis/wilmoore/simple-gift-exchange.svg)](https://travis-ci.org/wilmoore/simple-gift-exchange) [![NPM version](http://img.shields.io/npm/v/simple-gift-exchange.svg)](https://www.npmjs.org/package/simple-gift-exchange) [![NPM downloads](http://img.shields.io/npm/dm/simple-gift-exchange.svg)](https://www.npmjs.org/package/simple-gift-exchange) [![LICENSE](http://img.shields.io/npm/l/simple-gift-exchange.svg)](license)

> Simple JavaScript API to create a randomized gift exchange list given a list of at least 3 participants

    $ npm install simple-gift-exchange --save

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
> see [`example.js`](./example.js)
```
Abe gives a gift to Quan
Ardi gives a gift to Beth
Susan gives a gift to Abe
Quan gives a gift to Ardi
Beth gives a gift to Susan
```

## Getting Started

    require('simple-gift-exchange')

## Testing

    npm test

## License

  [MIT](license)
