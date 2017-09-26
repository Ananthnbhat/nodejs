const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return notes = JSON.parse(notesString);

    } catch (e) {
        return [];

    }

};
var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));


};



var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };


    var dupNotes = notes.filter((note) => note.title === title);
    if (dupNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }



};
var getAll = () => {
    return fetchNotes();

};
var readNote = (title) => {
    var notes = fetchNotes();
    var rNote = notes.filter((note) => note.title === title);
    return rNote[0];
};
var rem = (title) => {
    var notes = fetchNotes();
    var filterNotes = notes.filter((note) => note.title !== title);
    saveNotes(filterNotes);
};

var logNote = (note) => {
    debugger;
    console.log('----');
    console.log(`title: ${note.title}`);
    console.log(`body: ${note.body}`);

};
module.exports = {
    addNote,
    getAll,
    readNote,
    rem,
    logNote
};