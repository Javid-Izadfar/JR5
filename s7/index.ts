const books = [
  {
    id: 1,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    year: 1999,
    pages: 352,
    price: 30,
    genres: ["programming", "software"]
  },
  {
    id: 2,
    title: "Clean Code",
    author: "Robert C. Martin",
    year: 2008,
    pages: 464,
    price: 28,
    genres: ["programming"]
  },
  {
    id: 3,
    title: "The Clean Coder",
    author: "Robert C. Martin",
    year: 2011,
    pages: 256,
    price: 25,
    genres: ["programming", "career"]
  },
  {
    id: 4,
    title: "Refactoring",
    author: "Martin Fowler",
    year: 1999,
    pages: 448,
    price: 35,
    genres: ["programming", "architecture"]
  },
  {
    id: 5,
    title: "Patterns of Enterprise Application Architecture",
    author: "Martin Fowler",
    year: 2002,
    pages: 560,
    price: 40,
    genres: ["architecture"]
  },
  {
    id: 6,
    title: "Working Effectively with Legacy Code",
    author: "Robert C. Martin",
    year: 2004,
    pages: 456,
    price: 32,
    genres: ["programming"]
  },
  {
    id: 7,
    title: "Pragmatic Thinking and Learning",
    author: "Andrew Hunt",
    year: 2008,
    pages: 288,
    price: 22,
    genres: ["career", "productivity"]
  },
  {
    id: 8,
    title: "Refactoring to Patterns",
    author: "Martin Fowler",
    year: 2008,
    pages: 336,
    price: 27,
    genres: ["architecture", "design"]
  },
  {
    id: 9,
    title: "Clean Architecture",
    author: "Robert C. Martin",
    year: 2017,
    pages: 432,
    price: 34,
    genres: ["architecture"]
  },
  {
    id: 10,
    title: "Pragmatic Unit Testing",
    author: "Andrew Hunt",
    year: 2003,
    pages: 160,
    price: 20,
    genres: ["testing"]
  }
]

// Q1. find the first book which talks about Architecture 
const firstArchBook = books.find(book => 
    book.genres.includes('architecture')
)
console.log(firstArchBook)

// Q2. Sum of All Career Books Page Count
const careerBookPages = books.reduce((pages, book) => {
    if (book.genres.includes('career')) {
        return pages + book.pages
    }
    return pages
}, 0)
console.log(careerBookPages)

// Q3. What's the average publish year of these books?
const totalYears = books.reduce((years, book) => years + book.year, 0)
console.log(Math.round(totalYears / books.length))

// Q4. What's the price of Martin Fowler's Most Expensive Book?
const priceOfMostExpensiveFowlerBook = Math.max(
    ...books
        .map(book => {
            return book.author === 'Martin Fowler' ? book.price : 0 
            // if (book.author === 'Martin Fowler') {
            //     return book.price
            // }
            // return 0
        })
        // .filter(book => book.author === 'Martin Fowler')
        // .map(book => book.price)
)
console.log(priceOfMostExpensiveFowlerBook)

console.log(
    Math.min(
        ...books.map(book => 
            book.author === 'Martin Fowler' ? book.price : Infinity
        )
    )
)

// Q5. Create an Object of Authors with their book titles
// {
//     "Martin Fowler": ["Patterns of Enterprise Application Architecture", "Refactoring to Patterns"],
//     "Andrew Hunt": [ "Pragmatic Thinking and Learning"]
// }
const authors = books.reduce((acc, curr) => {
    // return {
    //     ...acc,
    //     [curr.author]: [
    //         ...(acc[curr.author] || []),
    //         curr.title
    //     ]
    // }

    // return acc[curr.author] ? acc[curr.author].push(curr.title) : {
    //         ...acc,
    //         [curr.author]: [curr.title]
    //     }
    
    if (acc[curr.author]) {
        acc[curr.author].push(curr.title)
    } else {
        acc[curr.author] = [curr.title]
    }
    return acc
}, {})
console.log(authors)

// ternary
const condition = true
console.log(
    condition ? 'yes' : 'no'
)


// ∞
console.log(Infinity > 0)
console.log(Infinity > Infinity)
console.log(Infinity === Infinity)
console.log(-Infinity > 0)
console.log(-Infinity < 0)
console.log(-Infinity < Infinity)
console.log(0 === +0)
console.log(0 <= -0)

// MATH
console.log(Math.min(2, 4, 1))
console.log(Math.max(2, 4, 1))
console.log(Math.floor(2.4))
console.log(Math.ceil(2.4))
console.log(Math.round(2.4))
console.log(Math.abs(-2))
console.log(Math.abs(2))