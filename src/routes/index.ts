import express from 'express';
import process from '../utilities/processImg';

const routes = express.Router();

routes.get('/images', async (req, res, next) => {
  const name = req.query.filename as string;
  const height = parseInt(req.query.height as string) || undefined;
  const width = parseInt(req.query.width as string) || undefined;
  try {
    await process(name, height, width);
  } catch (err) {
    next(err);
  }

  res.status(200).sendFile(`${name}-thumb.jpg`, { root: 'assets/thumb' });
});

export default routes;
