// Filter: The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/* const newNum = myNums.filter(function(num){
    return num > 4
})    --> The normal way of declaring vs the implicit return  */  

const newNum = myNums.filter((num)=> (num > 4))

console.log(newNum);    // prints --> [ 5, 6, 7, 8, 9, 10 ]


// A real-life example and use case for filter() method of Array instances

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

  let myBooks = books.filter((booktype) => booktype.publish >= 2002)   //booktype is each element of an array, in this case- each object of the array. And then, we use dot notation to access the values of the object.

  myBooks = books.filter((booktype) => booktype.genre === 'Non-Fiction' && booktype.edition >= 2010)   // overwriting myBooks as it is let and not const
  
  console.log(myBooks);    
  
  /*prints--> 
  
  [
    {
      title: 'Book Four',
      genre: 'Non-Fiction',
      publish: 1989,
      edition: 2010
    }
  ]  
    
  */