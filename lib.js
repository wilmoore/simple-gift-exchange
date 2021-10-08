// was tempted to use npmjs.com/package/function-pipeline but decided to keep it consistent
const pipefun = require('lodash.flow')
const shuffle = require('lodash.shuffle')

/**
 * need at least three attendees to have a reasonable gift exchange.
 */

const MIN_ATTENDEES = 3

/**
 * Ensures `attendees` parameter contains at least the minimum number of elements.
 *
 * @param {Array} attendees
 * List of people participating in the gift exchange.
 *
 * @return {Array}
 * List of people participating in the gift exchange.
 *
 * @throws {RangeError}
 */

const verifier = (attendees) => {
  const errorMessage = `The minimum number of attendees MUST be greater than or equal to ${MIN_ATTENDEES}.`
  if (attendees.length < MIN_ATTENDEES) throw new RangeError(errorMessage);
  return attendees
}

/**
 * Duplicate first list element and add it to the end of the list in order to make 
 * mitigate needing to over complicate the grouping logic.
 *
 * @param {Array} attendees
 * List of people participating in the gift exchange.
 *
 * @return {Array}
 * List of people participating in the gift exchange.
 */

const wraplist = (attendees) => [ ...attendees ].concat(attendees[0])

/**
 * Creates array of tuples as [giver, receiver]
 *
 * @param {Array} attendees
 * Ordered List of people participating in the gift exchange.
 *
 * @return {[giver, receiver][]}
 * List of tuples as [giver, receiver].
 */

const grouping = (attendees) => {
  // stop iteration at second to last array element
  let end = attendees.length - 1
  // array of tuples (TypeScript would indeed be a little nicer here)
  let grp = []
  let idx = -1

  while (++idx < end) {
    grp.push([attendees[idx], attendees[idx + 1]])
  }

  return grp
}

/**
 * Creates a gift exchange list
 *
 * @param {Array} attendees
 * List of people participating in the gift exchange.
 *
 * @return {[giver, receiver][]}
 * List of tuples as [giver, receiver].
 *
 * @throws {RangeError}
 */

const giftlist = pipefun([
  verifier,
  shuffle,
  wraplist,
  grouping
])


module.exports = {
  giftlist,
  grouping,
  verifier,
  wraplist,
}
