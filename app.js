const express = require('express');
const professoresRoutes = require('./routes/professoresRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API de Gerenciamento de Professores está funcionando!');
});

app.use('/professores', professoresRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});