const Router = require("express");
const router = new Router();
const notesController = require("../services/notesController");

router.post("/", notesController.create);
router.get("/", notesController.getAll);
router.get("/stats", notesController.statsNotes);
router.delete("/:id", notesController.delete);
router.patch("/:id", notesController.update);
router.get("/:id", notesController.getOne);
router.put("/to-archive/:id", notesController.notesToArchive);
router.put("/to-note/:id", notesController.archiveToNotes);

module.exports = router;
