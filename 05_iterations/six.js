const coding = ["js","ruby","python","java","cpp"]

const myNums = [1,2,3,4,5,6,7,8,9]

//filter mathod will give you back all values
const newNums = myNums.filter((num) => num > 4)
const newNums2 = myNums.filter((num) =>{
    return num < 4
})
console.log((newNums)); //ans : [5,6,7,8,9]
console.log((newNums2)); //ans : [1,2,3]


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ]; 

const userBooks = books.filter((book) => book.genre === "History")
const userBooks2 = books.filter((book) => {
    return book.publish > 1995 && book.genre === "History"
}
)

console.log(userBooks2);

