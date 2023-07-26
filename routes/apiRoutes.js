const express = require('express');
const router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

function readNotes() {
  const data = fs.readFileSync('./db/db.json', 'utf8');
  return JSON.parse(data);
}

function saveNotes(notes) {
  fs.writeFileSync('./db/db.json', JSON.stringify(notes));
}

router.get('/notes', (req, res) => {
  const notes = readNotes();
  res.json(notes);
});

router.post('/notes', (req, res) => {
  const newNote = {
    id: uuidv4(),
    ...req.body,
  };
  const notes = readNotes();
  notes.push(newNote);
  saveNotes(notes);
  res.json(newNote);
});

router.delete('/notes/:id', (req, res) => {
  const noteId = req.params.id;
  const notes = readNotes();
  const updatedNotes = notes.filter((note) => note.id !== noteId);
  saveNotes(updatedNotes);
  res.json({ message: 'Note deleted successfully.' });
});

module.exports = router;
