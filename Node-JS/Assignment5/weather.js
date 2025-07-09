const request = require('request')
const city = process.argv[2]
const url = `http://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${city}`

request({ url, json: true }, (err, res) => {
  if (!err) {
    const d = res.body
    console.log(`City: ${d.location.name}`)
    console.log(`Temp: ${d.current.temp_c}°C`)
    console.log(`Condition: ${d.current.condition.text}`)
  }
})