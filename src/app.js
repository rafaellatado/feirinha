import express from 'express';

const app = express();
app.use(express.json());

const products =
  [
    { id: 1, name: "Banana", quantity: 8, type: "fruta" },
    { id: 2, name: "Tangerina", quantity: 3, type: "fruta" },
    { id: 3, name: "Atum", quantity: 5, type: "peixe" },
    { id: 4, name: "Bagre", quantity: 2, type: "peixe" }
  ]
;

app.get('/items', (req, res) => {
  const { type } = req.query;
  
  if (!type) {
    res.send(products);

  } else {
    const specificProd = products.filter(prod => prod.type === type);
    res.send(specificProd);
  }
})

app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).send('O id precisa ser um número inteiro positivo.')
  }

  const prodId = products.find(prod => prod.id === id);

  if (!prodId) {
    return res.status(404).send('Produto não encontrado.')
  }

  res.send(prodId);
})

app.post('/items', (req, res) => {
  const item = req.body;

  if (
    (item.name && typeof(item.name) === 'string') && 
    (item.quantity && Number.isInteger(item.quantity)) && 
    (item.type && typeof(item.type) === 'string')
  ) {

    const sameName = products.find(prod => item.name === prod.name);

    if (sameName) {
      return res.status(409).send('Já existe um produto com este nome.')

    } else {
      products.push({
        id: products.length + 1,
        ...item
      })
      return res.status(201).send(products[products.length - 1]);
    }

  } else {
    res.sendStatus(422);
  }
});

app.listen(5000, () => console.log('Running server on port 5000!'));
