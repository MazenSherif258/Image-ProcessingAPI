import express from 'express';

const app = express();
const port = 3000;

// Run Server
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
