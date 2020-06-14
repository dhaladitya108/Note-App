const yargs = require("yargs");
const note = require("./note");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "String",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "String",
    },
  },
  handler(argv) {
    note.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Title of the note to be removed",
      demandOption: true,
      type: "String",
    },
  },
  handler(argv) {
    note.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "List all your notes",
  handler() {
    note.listNotes();
  },
});

yargs.command({
  command: "read",
  describe: "Read a note",
  handler() {
    console.log("Reading a note");
  },
});

yargs.parse();
