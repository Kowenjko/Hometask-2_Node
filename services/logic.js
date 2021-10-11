const { pattern } = require("../repositories/data");

// кількість в обєкті------------------
const findNotes = (obj) => {
  let res = Object.values(
    obj.reduce((a, { category }) => {
      a[category] = a[category] || { category, count: 0 };
      a[category].count++;
      return a;
    }, Object.create(null))
  );
  return res;
};
// підбиваємо підсумок по катагоріям--------------
const totalNotes = (TotalList, TotalArchiveList, noteTotal) => {
  for (let i = 0; i < noteTotal.length; i++) {
    for (let j = 0; j < TotalList.length; j++) {
      if (noteTotal[i].category == TotalList[j].category && noteTotal[i].category != undefined) {
        noteTotal[i].active = TotalList[j].count;
      }
    }
    for (let n = 0; n < TotalArchiveList.length; n++) {
      if (
        noteTotal[i].category === TotalArchiveList[n].category &&
        noteTotal[i].category != undefined
      ) {
        noteTotal[i].archive = TotalArchiveList[n].count;
      }
    }
  }
  return noteTotal;
};
// Доставання дати з тексту ------------------
const sendDate = (obj) => {
  const dates = obj.content.match(pattern);
  dates ? (obj["dates"] = dates) : obj;
  return obj;
};
// --перевіряємо чи є нотатка------------
const auditNotes = (id, obj) => {
  const index = obj.findIndex((elem) => elem.id === id);
  if (index < 0) return next(ApiError.badRequest("Немає такої нататки!"));
};
// Перекадання нотатки -----------------------
const updateNotesAthives = (id, obj, obj_2) => {
  const index = obj.findIndex((elem) => elem.id === id);
  const newNote = obj.filter((elem) => elem.id != id);
  obj_2.push(obj[index]);
  obj.splice(0, obj.length, ...newNote);
};

module.exports = { sendDate, updateNotesAthives, totalNotes, findNotes, auditNotes };
