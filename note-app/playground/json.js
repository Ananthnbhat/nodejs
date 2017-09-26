// var personString = '{"name":"Ananth","age":25}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var orgNote = {
    title: 'some title',
    body: 'some body'

};
var orgNoteString = JSON.stringify(orgNote);
fs.writeFileSync('notes.json', orgNoteString);




var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
//note
console.log(typeof note);
console.log(note.title);