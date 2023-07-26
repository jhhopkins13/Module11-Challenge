const express = require('express');
const router = express.Router();
const fs = require('fs');

function readNotes() {
  const data = fs.readFileSync('./db/db.json', 'utf8');
  return JSON.parse(data);
}

function saveNote(note) {
  const notes = readNotes();
  notes.push(note);
  fs.writeFileSync('./db/db.json', JSON.stringify(notes));
}

router.get('/notes', (req, res) => {
  const notes = readNotes();
  res.json(notes);
});

router.post('/notes', (req, res) => {
  const newNote = req.body;
  saveNote(newNote);
  res.json(newNote);
});

module.exports = router;
