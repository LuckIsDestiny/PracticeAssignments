const fs = require('fs')
const getData = () => fs.existsSync('notes.json') ? JSON.parse(fs.readFileSync('notes.json')) : []

function addNote(title, body) {
  const data = getData()
  if (!data.find(n => n.title === title)) {
    data.push({ title, body })
    fs.writeFileSync('notes.json', JSON.stringify(data))
    console.log('Note added!')
  }
}

function listNotes() {
  getData().forEach(n => console.log(n.title))
}

function removeNote(title) {
  const data = getData().filter(n => n.title !== title)
  fs.writeFileSync('notes.json', JSON.stringify(data))
  console.log('Note removed!')
}

module.exports = { addNote, listNotes, removeNote }