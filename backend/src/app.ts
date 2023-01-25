import express from 'express';
import bodyParser from 'body-parser';
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors())
app.use(bodyParser.json());
app.use('/questions', require('./routes/questions'))

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});