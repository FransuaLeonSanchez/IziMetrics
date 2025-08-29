const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.get('/', (req, res) => {
  res.render('index', { title: 'Izimetrics' });
});
app.get('/academy', (req, res) => {
  res.render('academy', { title: 'IziAcademy' });
});
app.get('/admin', (req, res) => {
  res.render('admin', { title: 'Panel Admin' });
});
app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`));
