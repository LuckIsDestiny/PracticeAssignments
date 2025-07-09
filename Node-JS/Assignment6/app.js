const express = require('express')
const app = express()

app.get('/weather', (req, res) => {
  const city = req.query.city
  res.send({ city, temp: '32', condition: 'Sunny' })
})

app.listen(3000)