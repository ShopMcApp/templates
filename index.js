require('dotenv').config()
const express = require('express');
const fs = require('fs')
const app = express();
const fetch = require('node-fetch');

app.set('view engine', 'ejs');

const customer = process.env.CUSTOMER
const baseURL = process.env.BASE_URL

app.get('/:template', async function (req, res) {
    const data = await fetch(`${baseURL}/api/shop/${customer}`).then(res => res.json())
    res.render(req.params.template, { shop: data, customer, baseURL });
});

app.listen(3000);
console.log('Server is listening on port 3000');