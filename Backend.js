const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/onboarding', (req, res) => {
  const { name, email, password } = req.body;
  // Do something with the user data
  res.send('Onboarding successful!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
