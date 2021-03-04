const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())
app.all('/getJSON', (req, res) => {
  res.json({ data: 'data' })
});

// Onboarding requests:

// - get all requests
// - get requests by status (new/pending/resolved)
// - get requests by id
app.get('/requests', (req, res) => {
  let reqId = req.query.requestId;
  let status = req.query.status;

  // Call Firebase DB

  // Filter Accordingly

  // Return
});

// - create new request
app.post('/request/create', (req, res) => {
  // The payload should be the request itself.

  // Push over to Firebase

  // Return the guid
});
// - update request parameters (id, full name, address, dob, emergency contact, id photo, status)
app.put('request/update', (req, res) => {
  // The payload should be the request itself.

  // Push over to Firebase

  // Return the guid
});
// - delete request by id
app.delete('', (req, res) => {
  // The payload should be the guid

  // Delete the key

  // Return successful or not
});

module.exports = app
