const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

function error(status, msg) {
  var err = new Error(msg);
  err.status = status;
  return err;
}

app.use('/api', function(req, res, next){
  var key = req.query['api-key'];
  if (!key) return next(error(400, 'api key required'));
  if (apiKeys.indexOf(key) === -1) return next(error(401, 'invalid api key'))
  req.key = key;
  next();
});

var apiKeys = ['foo', 'bar', 'baz'];

var products = [
  { "_id" : 1111111, "productName" : "FIBRA 1000 ADAMO", "productTypeName" : "ftth", "numeracioTerminal" : 931111111, "soldAt" : "2019-01-09 14:26:17", "customerId" : "11111", },
  { "_id" : 1111111, "productName" : "FIBRA 2000 ADAMO", "productTypeName" : "ftth", "numeracioTerminal" : 932222222, "soldAt" : "2019-01-09 14:26:17", "customerId" : "11112", },
  { "_id" : 1111111, "productName" : "FIBRA 3000 ADAMO", "productTypeName" : "ftth", "numeracioTerminal" : 933333333, "soldAt" : "2019-01-09 14:26:17", "customerId" : "11113", }
];

var customers = [
  {"_id" : 555555, "docType" : "nif", "docNum" : "11443344E", "email" : "it1@parlem.com", "customerId" : "11111", "givenName" : "Enriqueta", "familyName1" : "Parlem", "phone" : "666666666"},
  {"_id" : 555556, "docType" : "nif", "docNum" : "11223344E", "email" : "it2@parlem.com", "customerId" : "11112", "givenName" : "David", "familyName1" : "Parlem", "phone" : "777777777"},
  {"_id" : 555557, "docType" : "nif", "docNum" : "11553344E", "email" : "it3@parlem.com", "customerId" : "11113", "givenName" : "Maria", "familyName1" : "Parlem", "phone" : "788888888",}
];

// example: http://localhost:3001/api/customers/?api-key=foo
app.get('/api/customers', function(req, res, next){
  res.send(customers);
});

// example: http://localhost:3001/api/customers/11111/?api-key=foo
app.get('/api/customers/:id', function(req, res, next){
  var id = req.params.id;
  res.send(customers.filter(el => el.customerId == id));
});

// example: http://localhost:3001/api/user/11111/products/?api-key=foo
app.get('/api/user/:id/products', function(req, res, next){
  var id = req.params.id;
  var customerProducts = products.filter(el => el.customerId == id);

  if (customerProducts) res.send(customerProducts);
  else next();
});

app.use(function(err, req, res, next){
  res.status(err.status || 500);
  res.send({ error: err.message });
});

app.use(function(req, res){
  res.status(404);
  res.send({ error: "Sorry, can't find that" })
});

if (!module.parent) {
  app.listen(3001);
  console.log('Express started on port 3001');
}