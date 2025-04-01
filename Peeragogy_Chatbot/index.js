const express = require('express')
const flowise = require('flowise')

const app = express()
const PORT = process.env.PORT || 10000

app.get('/', (req, res) => {
  res.send('🚀 PeeragogyBot Flowise is alive!')
})

app.listen(PORT, async () => {
  console.log(`🧠 Server online su http://localhost:${PORT}`)
  await flowise.startFlowise()
})

