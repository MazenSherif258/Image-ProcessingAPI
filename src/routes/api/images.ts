import express from 'express';
import checkExist from '../../middleware/checkExist';
import process from '../../utilities/processImg';
const images = express.Router();

images.use(checkExist);

images.get('', async (req, res, next) => {
  const name = req.query.filename as string;
  const height = parseInt(req.query.height as string) || undefined;
  const width = parseInt(req.query.width as string) || undefined;
  if (name) {
    try {
      await process(name, height, width);
    } catch (err) {
      next('Error at sharp processig ' + err);
    }
    res.status(200).sendFile(`${name}-thumb.jpg`, { root: 'assets/thumb' });
  } else {
    res.status(200).sendFile('simpleForm.html', { root: './basicFrontend' });
  }
});

export default images;
