const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOption = {

    describe: 'Title of note',
    demand: true,
    alias: 't'

};
const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOption,
        body: {
            describe: 'Body of note',
            demand: true,
            alias: 'b'
        }
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOption
    })
    .command('remove', 'Remove a note', {
        title: titleOption
    })
    .help()
    .argv;
var cmd = process.argv[2];
// console.log('Command:', cmd);
// console.log('Process', process.argv);
// console.log('Yargs', argv);

if (cmd == 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note created');
        notes.logNote(note);

    } else {
        console.log('Please give a new title');
    }
} else if (cmd == 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
} else if (cmd == 'read') {
    var note = notes.readNote(argv.title);
    if (note) {
        console.log('note read');
        notes.logNote(note);
    } else {
        console.log('No such note exists');
    }
} else if (cmd == 'remove') {
    notes.rem(argv.title);
} else {
    console.log('cmd not recognised');
}