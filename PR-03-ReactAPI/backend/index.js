import express from 'express'

const app = express();

app.get('/api/products', (req, res) => {
  const products = [
    {
      id: 1,
      name: 'Table wooden',
      price: 200
    },
    {
      id: 2,
      name: 'Chair plastic',
      price: 50
    },
    {
      id: 3,
      name: 'Sofa leather',
      price: 500
    },
    {
      id: 4,
      name: 'Bed frame',
      price: 300
    },
    {
      id: 5,
      name: 'Desk metal',
      price: 150
    },
    {
      id: 6,
      name: 'Bookshelf wooden',
      price: 100
    },
    {
      id: 7,
      name: 'Lamp stand',
      price: 30
    },
    {
      id: 8,
      name: 'Couch fabric',
      price: 400
    },
    {
      id: 9,
      name: 'Dining table',
      price: 250
    },
    {
      id: 10,
      name: 'Side table',
      price: 80
    },
    {
      id: 11,
      name: 'Wardrobe',
      price: 600
    },
    {
      id: 12,
      name: 'Coffee table',
      price: 120
    },
    {
      id: 13,
      name: 'TV stand',
      price: 180
    }
  ];

  // http://localhost:3000/api/products?search=metal

  if (req.query.search) {
    const filteredProducts = products.filter((product) => product.name.includes(req.query.search))
    res.send(filteredProducts)
    return;
  }

  setTimeout(() => {
    res.send(products)
  }, 1000)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
})