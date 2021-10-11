const pattern = /(\d{1,2})[\.|\-\/](\d{1,2})[\.|\-|\/](\d{4})/g;
let notesTotal = [
  { id: 1, category: "Task", active: 0, archive: 0 },
  { id: 2, category: "Quote", active: 0, archive: 0 },
  { id: 3, category: "Random Thought", active: 0, archive: 0 },
  { id: 4, category: "Idea", active: 0, archive: 0 },
];
let notesArchive = [];
let notesList = [
  {
    id: 1,
    name: "Shoping list",
    created: "Sun Oct 03 2021",
    category: "Task",
    content: "Tomatoes, bread",
    dates: "",
  },
  {
    id: 2,
    name: "New Feature",
    created: "Sun Oct 02 2021",
    category: "Idea",
    content: "Implement new...",
    dates: "",
  },
  {
    id: 3,
    name: "William Gaddis",
    created: "Sun Oct 03 2021",
    category: "Quote",
    content: "Power doesn't co...",
    dates: "",
  },
  {
    id: 4,
    name: "The theory of evolut...",
    created: "Sun Oct 01 2021",
    category: "Random Thought",
    content: "The evolut..",
    dates: "",
  },
  {
    id: 5,
    name: "The theory of evolut...",
    created: "Sun Oct 01 2021",
    category: "Quote",
    content: "The evolut..",
    dates: "",
  },
  {
    id: 6,
    name: "The theory of evolut...",
    created: "Sun Oct 01 2021",
    category: "Random Thought",
    content: "The evolut..",
    dates: "",
  },
  {
    id: 7,
    name: "New Feature",
    created: "Sun Oct 02 2021",
    category: "Idea",
    content: "Implement new...",
    dates: "",
  },
];

module.exports = { notesList, pattern, notesArchive, notesTotal };
