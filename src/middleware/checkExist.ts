import fs from 'fs';
import express from 'express';
import sharp from 'sharp';

sharp.cache(false);

// MiddleWare to check the existence of an image
async function checkExist(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> {
  const name = req.query.filename as string;
  const height = parseInt(req.query.height as string);
  const width = parseInt(req.query.width as string);

  if (fs.existsSync(`./assets/thumb/${name}_${width}_${height}-thumb.jpg`)) {
    const image = sharp(`./assets/thumb/${name}_${width}_${height}-thumb.jpg`);
    const metadata = await image.metadata();

    if (metadata.height === height && metadata.width === width) {
      res.status(200).sendFile(`${name}_${width}_${height}-thumb.jpg`, {
        root: 'assets/thumb'
      });
    } else {
      next();
    }
  } else next();
}

export default checkExist;
