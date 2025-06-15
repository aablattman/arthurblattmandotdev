const express = require('express');
const app = express();

app.use(express.json());

app.post('/ping', (req, res) => {
  res.json({ message: 'pong', input: req.body });
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});
