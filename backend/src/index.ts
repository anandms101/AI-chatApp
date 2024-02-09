import express from 'express';

const app = express();

// using JSON for req and res
app.use(express.json());

// listen to port 3000
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
