const yargs = require("yargs");
const notes = require("./note");

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
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: () => console.log("Removing a note!"),
});

yargs.command({
  command: "list",
  describe: "List all your notes",
  handler: () => console.log("Listing out all notes"),
});

yargs.command({
  command: "read",
  describe: "Read a note",
  handler: () => console.log("Reading a note!"),
});

yargs.parse();
