//Import from catalog
var addTitle = require('./catalog.js').addTitle;
var removeTitle = require('./catalog.js').removeTitle

function greetPatron(patron, time) {
  return `${time < 12 ? "Good Morning" : "Hello"}, ${patron}!`
}

function findBookRequest(book, catalog) {
  if (catalog.includes(book)) {
    removeTitle(book, catalog)
    return `Yes, we have ${book}`
  }
  else {
    return `Sorry, we do not have ${book}`
  }
}

function checkInBookReturn(book, catalog) {
  if (!catalog.includes(book)) {
    addTitle(book, catalog)
    return `Thank you for returning ${book}`
  }
}

function calculateLateFee(daysLate) {
  var dailyFee = 0.25;
  return Math.ceil(daysLate * dailyFee)
}

module.exports = {
  greetPatron: greetPatron,
  findBookRequest: findBookRequest,
  checkInBookReturn: checkInBookReturn,
  calculateLateFee: calculateLateFee
}