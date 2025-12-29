const express = require('express');
const router = express.Router();

// Routes moved from index.js
router.get('/', (request, response) => response.send('hello from skillsoft'));
router.post('/addemployee', (request, response) => {
  const empName = request.body.empName;
  const empPass = request.body.empPass;
  response.end(`POST success, you sent ${empName} and ${empPass}, thanks!`);
});

module.exports = router;