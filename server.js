const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000; //looks for an environment variable named port, it's specific for heroku depoloyment

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
