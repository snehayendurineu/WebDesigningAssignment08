const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/userRouter');

const PORT = process.env.PORT || 3000;
const app = express()

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}))

app.use('/', routes);

module.exports = app;
