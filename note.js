const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length == 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNote(notes);
  } else {
    console.log("Note with the same title is already used");
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => title != note.title);
  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note removed"));
    saveNote(notesToKeep);
  } else console.log(chalk.red.inverse("No note found!"));
};

const saveNote = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your Note"));
  notes.forEach((note) => {
    console.log(note.title);
  });
};
module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
};
