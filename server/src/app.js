const express = require('express');
const app = express();
const postRoutes = require('./routes/postRoutes');
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());
app.use('/api/posts', postRoutes);
app.use(errorHandler);

module.exports = app;
