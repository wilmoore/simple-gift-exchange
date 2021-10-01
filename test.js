const tap = require('tap')
const { giftlist, grouping, wraplist, verifier } = require('./lib')

/**
 * verifier
 */

tap.throws(
  () => verifier(['Jack']),
  RangeError,
  { skip: false }
)

tap.throws(
  () => verifier(['Jack', 'Jill']),
  RangeError,
  { skip: false }
)

tap.doesNotThrow(
  () => verifier(['Jack', 'Jill', 'Giant']),
  {},
  { skip: false }
)

/**
 * wraplist
 */

tap.same(
  wraplist(['Jack', 'Jill', 'Giant']),
  ['Jack', 'Jill', 'Giant', 'Jack'],
  { skip: false }
)

/**
 * grouping
 */

tap.same(
  grouping(['Jack', 'Jill', 'Giant', 'Jack']),
  [['Jack', 'Jill'], ['Jill', 'Giant'], ['Giant', 'Jack']],
  { skip: false }
)
