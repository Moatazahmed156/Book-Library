const books = [
  {
    name: "Clean Code",
    author: "Robert C. Martin",
    publisher: "Prentice Hall",
    date: "August 1, 2008",
    classification: "Software Engineering",
    price: "1200 EGP",
    image: "./images/book1.jpg",
  },
  {
    name: "Pandas Workout",
    author: "Thomas H. Cormen",
    publisher: "MIT Press",
    date: "July 31, 2009",
    classification: "Algorithms",
    price: "1800 EGP",
    image: "./images/book2.jpg",
  },
  {
    name: "Tanar of pellugidar",
    author: "Kyle Simpson",
    publisher: "Independently published",
    date: "June 31,2020",
    classification: "JavaScript",
    image: "./images/book3.jpg",
  },
  {
    name: "The Great Gatsby",
    author: "Andrew Hunt, David Thomas",
    publisher: "Addison-Wesley",
    date: "October 30, 2019",
    classification: "Programming",
    price: "1500 EGP",
    image: "./images/book4.jpg",
  },
  {
    name: "Pride and Prejudice",
    author: "Erich Gamma et al.",
    publisher: "Addison-Wesley",
    date: "October 31, 1994",
    classification: "Software Design",
    price: "1750 EGP",
    image: "./images/book5.jpg",
  },
  {
    name: "War and Peace",
    author: "Gayle Laakmann McDowell",
    publisher: "CareerCup",
    date: "July 1, 2015",
    classification: "Interview Prep",
    price: "1600 EGP",
    image: "./images/book6.jpg",
  },
  {
    name: "Crime and Punishment",
    author: "Martin Fowler",
    publisher: "Addison-Wesley",
    date: "November 19, 2018",
    classification: "Software Engineering",
    price: "1400 EGP",
    image: "./images/book7.jpg",
  },
  {
    name: "The Hobbit",
    author: "Douglas Crockford",
    publisher: "O'Reilly Media",
    date: "May 15, 2008",
    classification: "JavaScript",
    price: "900 EGP",
    image: "./images/book8.jpg",
  },
  {
    name: "Harry Potter and the Sorcerer’s Stone",
    author: "Marijn Haverbeke",
    publisher: "No Starch Press",
    date: "December 4, 2018",
    classification: "JavaScript",
    price: "1100 EGP",
    image: "./images/book9.jpg",
  },
  {
    name: "The Clean Coder",
    author: "Robert C. Martin",
    publisher: "Prentice Hall",
    date: "May 13, 2011",
    classification: "Professional Development",
    price: "1250 EGP",
    image: "./images/book10.jpg",
  },
  {
    name: "The Name of the Wind",
    author: "Eric Freeman, Elisabeth Robson",
    publisher: "O'Reilly Media",
    date: "October 25, 2004",
    classification: "Design Patterns",
    price: "1350 EGP",
    image: "./images/book11.jpg",
  },
  {
    name: "Atomic Habits",
    author: "Harold Abelson, Gerald Jay Sussman",
    publisher: "MIT Press",
    date: "July 1, 1996",
    classification: "Computer Science",
    price: "1700 EGP",
    image: "./images/book12.jpg",
  },
  {
    name: "Effective Java",
    author: "Joshua Bloch",
    publisher: "Addison-Wesley",
    date: "January 6, 2018",
    classification: "Java",
    price: "1450 EGP",
    image: "./images/book13.jpg",
  },
  {
    name: "Code Complete",
    author: "Steve McConnell",
    publisher: "Microsoft Press",
    date: "June 9, 2004",
    classification: "Software Development",
    price: "1550 EGP",
    image: "./images/book14.jpg",
  },
  {
    name: "Deep Work",
    author: "Michael Sipser",
    publisher: "Cengage Learning",
    date: "February 15, 2012",
    classification: "Theoretical CS",
    price: "1650 EGP",
    image: "./images/book15.jpg",
  },
  {
    name: "Thinking, Fast and Slow",
    author: "Eric Freeman, Elisabeth Robson",
    publisher: "O'Reilly Media",
    date: "October 25, 2004",
    classification: "Design Patterns",
    price: "1350 EGP",
    image: "./images/book16.jpg",
  },
  {
    name: "Les Misérables ",
    author: "Harold Abelson, Gerald Jay Sussman",
    publisher: "MIT Press",
    date: "July 1, 1996",
    classification: "Computer Science",
    price: "1700 EGP",
    image: "./images/book17.jpg",
  },
  {
    name: "Effective Java",
    author: "Joshua Bloch",
    publisher: "Addison-Wesley",
    date: "January 6, 2018",
    classification: "Java",
    price: "1450 EGP",
    image: "./images/book18.png",
  },
  {
    name: "Code Complete",
    author: "Steve McConnell",
    publisher: "Microsoft Press",
    date: "June 9, 2004",
    classification: "Software Development",
    price: "1550 EGP",
    image: "./images/book19.jpg",
  },
  {
    name: "The Catcher in the Rye",
    author: "Michael Sipser",
    publisher: "Cengage Learning",
    date: "February 15, 2012",
    classification: "Theoretical CS",
    price: "1650 EGP",
    image: "./images/book20.jpg",
  },
];
localStorage.setItem("books", JSON.stringify(books));
