const data = [
  {
    title: "Oppenheimer",
    releaseYear: 2023,
    genre: ["Drama", "History"],
    director: "Christopher Nolan",
    cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon", "Robert Downey Jr."],
    duration: "180 minutes",
    rating: 8.6,
    posterUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ8FFJNBaIXvhEwqXXw40rYYDci8jPlYxWfy9082flliYoZ-SqqZjy0az-G5rIWuSJp2pn7xQ",
    synopsis:
      "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
  },
  {
    title: "Barbie",
    releaseYear: 2023,
    genre: ["Comedy", "Fantasy"],
    director: "Greta Gerwig",
    cast: ["Margot Robbie", "Ryan Gosling", "Simu Liu", "America Ferrera"],
    duration: "114 minutes",
    rating: 7.4,
    posterUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcROuK_Bl8jrLUP7fo3hsDC4XC2AC1WR1CAXS3G1SVqDPZE0pgFTQKnr8P2_cKmRuXg03nPE",
    synopsis:
      "Barbie embarks on a journey of self-discovery after leaving her perfect Barbie Land for the real world.",
  },
  {
    title: "The Marvels",
    releaseYear: 2023,
    genre: ["Action", "Adventure", "Sci-Fi"],
    director: "Nia DaCosta",
    cast: ["Brie Larson", "Teyonah Parris", "Iman Vellani", "Zawe Ashton"],
    duration: "105 minutes",
    rating: 6.3,
    posterUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr2CHFXhorQkI9wP5KMf290fdqX7eRnl95P_BddZBIEuCqOAI7FYUnILfgo_ovnCK4ppeQyA",
    synopsis:
      "Carol Danvers, Monica Rambeau, and Kamala Khan team up to unravel a cosmic mystery and save the universe.",
  },
  {
    title: "Dune: Part Two",
    releaseYear: 2024,
    genre: ["Action", "Adventure", "Drama"],
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson", "Josh Brolin"],
    duration: "150 minutes",
    rating: 9.0,
    posterUrl:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR1HYYqIoovqLVr7DQU9tevo_bMrzQqJ7LQiVnjyK1x5BUHqrjFB_JDtftcR1Sxo1cPE0fPmg",
    synopsis:
      "Paul Atreides unites with the Fremen to wage war against House Harkonnen and reclaim Arrakis.",
  },
  {
    title: "Killers of the Flower Moon",
    releaseYear: 2023,
    genre: ["Crime", "Drama", "History"],
    director: "Martin Scorsese",
    cast: [
      "Leonardo DiCaprio",
      "Lily Gladstone",
      "Robert De Niro",
      "Jesse Plemons",
    ],
    duration: "206 minutes",
    rating: 8.2,
    posterUrl:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQn_mCo1bDq8dZY9qzR7V59hsQ6Xkgv0FCNpTvDlkwctzuJZ5O4BBCN86duJl9J1kTTb_XoZw",
    synopsis:
      "The Osage Nation becomes the focal point of greed, murder, and corruption during the 1920s.",
  },
  {
    title: "Mission: Impossible – Dead Reckoning Part One",
    releaseYear: 2023,
    genre: ["Action", "Thriller"],
    director: "Christopher McQuarrie",
    cast: ["Tom Cruise", "Hayley Atwell", "Ving Rhames", "Simon Pegg"],
    duration: "163 minutes",
    rating: 7.8,
    posterUrl:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR34_otMSvSpe1Nn8Iip4kpkcaAHrUGaIITwQYC9iRIL4q34rHhTY2cTYrbRe303iD5fdsm",
    synopsis:
      "Ethan Hunt and his IMF team face a new global threat and race to retrieve a dangerous weapon.",
  },
  {
    title: "Spider-Man: Across the Spider-Verse",
    releaseYear: 2023,
    genre: ["Animation", "Action", "Adventure"],
    director: ["Joaquim Dos Santos", "Kemp Powers", "Justin K. Thompson"],
    cast: ["Shameik Moore", "Hailee Steinfeld", "Oscar Isaac", "Jake Johnson"],
    duration: "140 minutes",
    rating: 9.1,
    posterUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDDvJ0zhGxVySz3RjLa35ukjpctxW41KzD3VQ56VzSEX2lB5WHZ0le10IjuI8ZJ9cd5CeZpA",
    synopsis:
      "Miles Morales catapults across the Multiverse, encountering a team of Spider-People tasked with its protection.",
  },
  {
    title: "Guardians of the Galaxy Vol. 3",
    releaseYear: 2023,
    genre: ["Action", "Adventure", "Comedy"],
    director: "James Gunn",
    cast: ["Chris Pratt", "Zoe Saldana", "Dave Bautista", "Bradley Cooper"],
    duration: "150 minutes",
    rating: 8.3,
    posterUrl:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRkyKX8165zgrg_ded57Dq66MKQsx7K8VNHyCB4u7Kbm5qJgv5Sh6WO-oPi2oCnsVbsRicm",
    synopsis:
      "The Guardians embark on one last mission to protect one of their own from the High Evolutionary.",
  },
  {
    title: "John Wick: Chapter 4",
    releaseYear: 2023,
    genre: ["Action", "Thriller"],
    director: "Chad Stahelski",
    cast: [
      "Keanu Reeves",
      "Donnie Yen",
      "Bill Skarsgård",
      "Laurence Fishburne",
    ],
    duration: "169 minutes",
    rating: 8.0,
    posterUrl:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTBnfgdj6S32yB-VjpwLVnIE4-CHop12_I0ZqWJOEDnMMfhCMPhuQqyMZKwwvP2-wgOhV0bRA",
    synopsis:
      "John Wick uncovers a path to defeating the High Table but must face new enemies along the way.",
  },
  {
    title: "The Flash",
    releaseYear: 2023,
    genre: ["Action", "Adventure", "Fantasy"],
    director: "Andy Muschietti",
    cast: ["Ezra Miller", "Sasha Calle", "Michael Keaton", "Ben Affleck"],
    duration: "144 minutes",
    rating: 6.9,
    posterUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlTCLSubZKO6c7ZFrKQPRBx5-RR6OnThjbEvA2SJsht8BqyJrFE3Zu-tx-AHlKOfZEY_ji",
    synopsis:
      "Barry Allen uses his super speed to change the past but inadvertently alters the future.",
  },
];

module.exports = data;
