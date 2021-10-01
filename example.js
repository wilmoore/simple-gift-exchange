const { giftlist } = require('./lib')

const attendees = ['Susan', 'Beth', 'Abe', 'Ardi', 'Quan']

const giftExchangeList = giftlist(attendees)

console.log(giftExchangeList)

/*
[
  [ 'Susan', 'Beth' ],
  [ 'Beth', 'Quan' ],
  [ 'Quan', 'Ardi' ],
  [ 'Ardi', 'Abe' ],
  [ 'Abe', 'Susan' ]
]
*/

giftExchangeList.forEach((tuple) => console.log(`${tuple[0]} gives a gift to ${tuple[1]}`))

/*
  Susan gives a gift to Beth
  Beth gives a gift to Quan
  Quan gives a gift to Ardi
  Ardi gives a gift to Abe
  Abe gives a gift to Susan
*/
