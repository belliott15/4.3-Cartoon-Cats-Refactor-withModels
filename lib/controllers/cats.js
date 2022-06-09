const { Router } = require('express');
const CartoonCat = require('../models/CartoonCat');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const findCat = await CartoonCat.getCatByID(id);
    res.json(findCat);
  })
  .get('/', async (req, res) => {
    const allCats = await CartoonCat.getAllCats();
    const nameAndId = allCats.map(({ id, name }) => ({ id, name }));
    res.json(nameAndId);
  });
