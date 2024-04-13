const express = require('express');

const app = express();

const port = 3000;

app.listen(port, () => {
  console.log('App running on port ' + port);
});

app.get('/', (req, res) => {
  res
    .status(300)
    .json({
      message:
        'This server is running in Ponta Porã, better known as end of the world ',
      app: 'Natours V1'
      });
});


app.put('/', (req, res) => {
  res.json({
    message: "Put with this end point",
    whatappisit: "Natours V2"
  });
})