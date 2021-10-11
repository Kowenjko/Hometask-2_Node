const ApiError = require("../error/ApiError");
const { notesList, notesArchive, notesTotal } = require("../repositories/data");
const { sendDate, updateNotesAthives, totalNotes, findNotes, auditNotes } = require("./logic");

class notesController {
  // -Добавляємо нотатку-------------
  create(req, res) {
    let note = req.body;
    let newNote = sendDate(note);
    notesList.push(newNote);
    res.status(200).json({ message: "Нотатку створено" });
  }
  // --Виводимо все-------------------
  getAll(req, res) {
    res.status(200).json({ notesList: notesList, notesArchive: notesArchive });
  }
  // --Виводимор одну нотатку---------
  getOne(req, res, next) {
    const id = Number(req.params.id);
    const index = notesList.findIndex((elem) => elem.id === id);
    if (index < 0) return next(ApiError.badRequest("Немає такої нататки!"));
    res.status(200).json(notesList[index]);
  }
  // --Удаляємо одну нотатку-----------
  delete(req, res, next) {
    const id = Number(req.params.id);
    const newNote = notesList.filter((elem) => elem.id != id);
    const index = notesList.findIndex((elem) => elem.id === id);
    if (index < 0) return next(ApiError.badRequest("Немає такої нататки!"));
    notesList.splice(0, notesList.length, ...newNote);
    res.status(200).json({ message: "Нотатку видалено" });
  }
  // -обновляємо одну нотатку-----------
  update(req, res, next) {
    const id = Number(req.params.id);
    let noteBody = req.body;
    const note = notesList.find((elem) => elem.id === id);
    const index = notesList.indexOf(note);
    if (index < 0) return next(ApiError.badRequest("Немає такої нататки!"));
    const updatedNote = { ...note, ...noteBody };
    let newNote = sendDate(updatedNote);
    notesList[index] = newNote;
    res.status(200).json({ message: "Нотатку обновлено" });
  }
  // -Із нотатки в архів-----------
  notesToArchive(req, res, next) {
    const id = Number(req.params.id);
    const index = notesList.findIndex((elem) => elem.id === id);
    if (index < 0) return next(ApiError.badRequest("Немає такої нататки!"));
    updateNotesAthives(id, notesList, notesArchive);
    res.status(200).json({ message: "Нотатку передано до архіву" });
  }
  // -Із архіва до нотаток-----------
  archiveToNotes(req, res, next) {
    const id = Number(req.params.id);
    const index = notesArchive.findIndex((elem) => elem.id === id);
    if (index < 0) return next(ApiError.badRequest("Немає такої нататки!"));
    updateNotesAthives(id, notesArchive, notesList);
    res.status(200).json({ message: "Нотатку повернено назад" });
  }
  // -Зведена статистика -----------
  statsNotes(req, res) {
    let totalList = findNotes(notesList);
    let totalArchiveList = findNotes(notesArchive);
    let stats = totalNotes(totalList, totalArchiveList, notesTotal);
    res.status(200).json({ stats: stats });
  }
}

module.exports = new notesController();
