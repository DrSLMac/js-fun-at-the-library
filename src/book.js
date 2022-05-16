function createTitle(title) {
return `The ${title}`
}

function buildMainCharacter(name, age, pronouns) {
 var characterObj = {
   name: name,
   age: age,
   pronouns: pronouns,
  }
  return characterObj
};

var uniqueReview = []
//function saveReview(reviewTitle, reviews) {
function saveReview(uniqueReview, reviews) {
  if(reviews.includes(uniqueReview) === false)
  reviews.push(uniqueReview)
  return reviews
}
//Test is asking to log only unique reviews in the array
//If statement to identify uniqueReview
//if the review is unique, log it to the array
//else do not add to array
 //reviews.push(reviewTitle)
 //return reviews;
 //if (uniqueReview) {
 //   reviews.push(uniqueReview)
 //} else {
//  return reviews.length

function calculatePageCount(bookTitle){
//for every letter in a book title, add 20 pages.
// bookTitle.length * 20
var numPages = bookTitle.length * 20
return numPages
//for (var i = 0; i < bookTitle.length; i++)
//bookTitle.length * 20
//return bookPageCount
}

function writeBook(bookTitle, bookCharacter, pageCount, genre) {
  var bookObject = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: "fantasy",
  }
  return bookObject
}


function editBook(someBookPages) {
someBookPages.pageCount = someBookPages.pageCount * .75
  //var numPages = calculatePageCount(ghoulTitle)
  return someBookPages.pageCount
}
//var numPages = {
//  pageCount: calculatePageCount(bookTitle)

//return bookObject.pageCount * .75



module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
