export function* startTrainingGenerator(
  numEpochs: number
): Generator<number, void, unknown> {
  for (let i = 0; i < numEpochs; i++) {
    yield i;
  }
}
