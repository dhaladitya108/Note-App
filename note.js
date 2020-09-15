const fs = require("fs");
const chalk = require("chalk");

// Adding Note
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });

    saveNote(notes);
  } else {
    console.log("Note with the same title is already used");
  }
};


//Removing Note
const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => title != note.title);
  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note removed"));
    saveNote(notesToKeep);
  } else console.log(chalk.red.inverse("No note found!"));
};


// Saving Note
const saveNote = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};


// Loading Notes
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

 
// Listing Notes
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your Note"));
  notes.forEach((note) => {
    console.log(note.title);
  });
};


// Reading Note
const readNote = (title) => {
  const notes = loadNotes();
  const selectedNote = notes.find((note) => note.title === title);
  if (selectedNote) {
    console.log(chalk.green.inverse(selectedNote.title));
    console.log(selectedNote.body);
  } else console.log(chalk.red.inverse("No note found!"));
};


module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
