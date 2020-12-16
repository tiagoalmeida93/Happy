import express from 'express'

const app = express();

app.get('/users/:id', (req, res) => {
  console.log(req.query);
  console.log(req.params);
  
  return res.json({ message: "Hello" })
})

app.listen(3333);