const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use('public', express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());

app.post('/authuser', (req, res) => {
  console.log('post request successful');
  const sample = {
    "user": {
      "id": 1,
      "username": "ghdgnsvy",
      "name": "Brian"
    },
    "posts": [
      {
        "title": "Sample entry",
        "date": new Date().toLocaleString(),
        "content": "Hi, this is a test entry. Have a nice day!"
      },
      {
        "title": "Just one more entry",
        "date": new Date().toLocaleString(),
        "content": "This is another test entry, just in case!"
      }
    ]
  };
  res.status(200).json(sample);
});

app.get('/', (req, res) => {
  console.log('backend is working at all');
  res.sendFile(path.join(__dirname, '../public/', 'index.html'));
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));