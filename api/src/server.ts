import express from 'express'

const app = express();

app.use(express.json())

app.post('/users/:id', (req, res) => {
  console.log(req.query);
  console.log(req.params);
  console.log(req.body);
  
  
  return res.json({ message: "Hello" })
})

app.listen(3333);