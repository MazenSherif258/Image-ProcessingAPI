import sharp from 'sharp';

/**
 *
 * @param input Path of the image wanted
 * @param height desired height of image
 * @param width desired width of image
 * @throws Error if processing the image failed
 */
const process = async (
  input: string,
  height: number,
  width: number
): Promise<void> => {
  try {
    await sharp('./assets/full/' + input + '.jpg')
      .resize(width, height)
      .toFile(`./assets/thumb/${input}-thumb.jpg`);
  } catch (err) {
    throw new Error('Input file is missing');
  }

  const time = new Date();

  console.log(
    `\nServed Image ${input}-thumb.jpg `,
    `\nDetails: {\n Height: ${height} px \n Width: ${width} px\n}`,
    `\nAt ${time.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric'
    })}\n`
  );
};
export default process;
