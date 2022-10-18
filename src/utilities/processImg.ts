import sharp from 'sharp';
import fs from 'fs';

const process = async (
  input: string,
  height: number | undefined,
  width: number | undefined
): Promise<void> => {
  let found = false;
  if (fs.existsSync('./assets/thumb/' + input + '-thumb.jpg')) {
    const image = sharp('./assets/thumb/' + input + '-thumb.jpg');
    const metadata = await image.metadata();
    if (metadata.height === height && metadata.width === width) found = true;
  }
  if (!found) {
    await sharp('./assets/full/' + input + '.jpg')
      .resize(width, height)
      .toFile(`./assets/thumb/${input}-thumb.jpg`);
  }
};

export default process;
