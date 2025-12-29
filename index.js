const express = require('express');
const port = 8000;
const app = express();
//
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//
// Wire external routes
const router = require('./routes/routes');
app.use('/', router);
//
app.listen(port, function () {
  console.log('Listening ' + port);
});
