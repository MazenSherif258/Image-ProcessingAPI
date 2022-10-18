import express from 'express';
import routes from './routes';

const app = express();
const port = 3000;

app.use('/api', routes);

// Run Server
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

export default app;
