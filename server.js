var GetClients = function(error) {
  var result;

  if (error) {
    result = {
      'ok': false,
      'error': 'Serviço indisponível.',
      'errorno': 1
    };
  } else {
    result = {
      'ok':true, 'data': {
        'title': 'Lista de Clientes',
        'table': [
          { 'name': 'José Maria', 'email': 'jose@email.com' },
          { 'name': 'Raquel Pereira', 'email': 'raquel@email.com' },
          { 'name': 'Marcos Paulo', 'email': 'marcos@email.com' },
          { 'name': 'Tatiana Torres', 'email': 'tatiana@email.com' },
          { 'name': 'Easter Egg', 'email': 'easter@email.com' }
        ]
      }
    };
  }

  return result;
};

var express = require('express');
var winston = require('winston');
var app = express();
var path = require('path');

app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

app.get('/clients.json', function(req, res){
  winston.info('clients.json');
  res.send(GetClients());
});

app.get('/clients_error.json', function(req, res){
  winston.info('clients_error.json');
  res.send(GetClients(true));
});

app.configure(function(){
  app.use(express.static(path.join(__dirname, 'app')));
});

app.listen(9876);
