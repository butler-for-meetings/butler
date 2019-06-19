const path = require('path');
const app = require(path.resolve('lib/express'));

app.get('/', (req, res) => {
  res.send('Im cool');
});

app.listen(8080);
