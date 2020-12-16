import express from 'express'

const app = express();

app.get('/users', (req, res) => {
  console.log(req.query);
  return res.json({ message: "Hello" })
})

app.listen(3333);