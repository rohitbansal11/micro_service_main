const express = require('express')
const app = express()
const port =process.env.PORT|| 8082

app.get('/', (req, res) => {
  res.send('Hello From Main!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})