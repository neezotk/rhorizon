const express = require('express');
const multer = require('multer');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
const port = 3001;

// PostgreSQL config
const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'rhorizon',
  password: 'postgres',
  port: 5432,
});

app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, file.originalname),
});

const upload = multer({ storage });

app.post('/api/candidate', upload.single('cv'), async (req, res) => {
  const { name, email } = req.body;
  const filename = req.file?.originalname || '';
  await pool.query('INSERT INTO candidates(name, email, filename) VALUES($1, $2, $3)', [name, email, filename]);
  res.send({ message: 'Candidature reçue.' });
});

app.listen(port, () => console.log(`Backend running on port ${port}`));
