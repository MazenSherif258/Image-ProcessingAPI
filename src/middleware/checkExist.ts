import fs from 'fs';
import express from 'express';
import sharp from 'sharp';

// MiddleWare to check the existence of an image
async function checkExist(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> {
  const name = req.query.filename as string;
  const height = parseInt(req.query.height as string);
  const width = parseInt(req.query.width as string);
  if (fs.existsSync('./assets/thumb/' + name + '-thumb.jpg')) {
    const image = sharp('./assets/thumb/' + name + '-thumb.jpg');
    const metadata = await image.metadata();
    if (metadata.height === height && metadata.width === width) {
      res.status(200).sendFile(`${name}-thumb.jpg`, { root: 'assets/thumb' });
    }
  } else next();
}

export default checkExist;
