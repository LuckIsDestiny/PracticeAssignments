const notes = require('./notes')
const cmd = process.argv[2]

if (cmd === 'add') notes.addNote(process.argv[4], process.argv[6])
if (cmd === 'list') notes.listNotes()
if (cmd === 'remove') notes.removeNote(process.argv[4])