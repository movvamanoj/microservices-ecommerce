const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('User Service Running');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`User service listening on port ${PORT}`);
});
