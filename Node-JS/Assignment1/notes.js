const fs = require('fs')
const data = fs.existsSync('notes.json') ? JSON.parse(fs.readFileSync('notes.json')) : []
const cmd = process.argv[2]

if (cmd === 'add') {
  const title = process.argv[4]
  const body = process.argv[6]
  if (!data.find(n => n.title === title)) {
    data.push({ title, body })
    fs.writeFileSync('notes.json', JSON.stringify(data))
    console.log('Note added!')
  } else {
    console.log('Duplicate title!')
  }
} else if (cmd === 'list') {
  data.forEach(n => console.log(n.title))
} else if (cmd === 'remove') {
  const title = process.argv[4]
  const filtered = data.filter(n => n.title !== title)
  fs.writeFileSync('notes.json', JSON.stringify(filtered))
  console.log('Note removed!')
}