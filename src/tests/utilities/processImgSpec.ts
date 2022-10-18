import process from '../../utilities/processImg';

describe('Test Function Process', () => {
  it('Expects to Process Image Successfully', async () => {
    await expectAsync(process('fjord', 250, 20)).toBeResolved();
  });

  it('Expects to Throw Error Input File Is Missing', async () => {
    await expectAsync(process('fj', 250, 250)).toBeRejectedWithError(
      'Input file is missing'
    );
  });
});
