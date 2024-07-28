const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());


// create a backend route to serve the index.html file with name in query 
app.get('/api', (req, res) => {
    const { msg } = req.query;
    res.json({ message: 'Msg from server : ' + msg });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
