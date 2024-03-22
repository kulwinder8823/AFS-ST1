const mail = require('./controllers/sendMail');
const express = require('express');
const app = express();

// middleware 
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
  });

app.use('/', require('./routes/authRoutes'));
// app.post('/register', mail);

const port = 80;
app.listen(port, () => console.log(`Server is running on port ${port}`));
