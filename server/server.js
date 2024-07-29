const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const dbURI = 'mongodb://localhost:27017/docs';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

    const docsRouter = require('./routes/docs');
    app.use('/docs', docsRouter);

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));