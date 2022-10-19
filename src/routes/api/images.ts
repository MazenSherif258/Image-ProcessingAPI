import express from 'express';
import checkExist from '../../middleware/checkExist';
import process from '../../utilities/processImg';

const images = express.Router();

images.use(checkExist);

images.get(
  '',
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<void> => {
    const name = req.query.filename as string;
    const height = parseInt(req.query.height as string);
    const width = parseInt(req.query.width as string);

    // If there is query parameters then process image , if not then direct the user to a simple form to choose how he wants an image to be processed
    if (name) {
      try {
        await process(name, height, width);
      } catch (err) {
        next('Error at sharp processig ' + err);
      }
      res.status(200).sendFile(`${name}_${width}_${height}-thumb.jpg`, {
        root: 'assets/thumb'
      });
    } else {
      res.status(200).sendFile('simpleForm.html', { root: './basicFrontend' });
    }
  }
);

export default images;
