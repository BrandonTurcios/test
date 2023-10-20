const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/a', (req, res) => {
    res.send('LA LETRA A!')
  })

app.get('/b', (req, res) => {
    res.send('LA LETRA B!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})