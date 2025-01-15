import express from 'express';

const app = express();
app.use(express.json());

const pessoas = [];

app.get('/pessoas', (req, res) => {
  res.send(pessoas);
})

app.post('/pessoas', (req, res) => {
  const pessoa = req.body;
  pessoas.push(pessoa);
  res.send(pessoa); 
});

app.listen(5000, () => console.log('Running server on port 5000!'));
