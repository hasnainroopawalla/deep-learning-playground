import * as React from "react";
import { startTrainingGenerator } from "../ml";
import { vectorTs } from "../vectorTs";

const startTraining = (setCurrentEpoch: (_epoch: number) => void) => {
  const gen = startTrainingGenerator(1000);

  for (const epoch of gen) {
    setTimeout(() => setCurrentEpoch(epoch), epoch * 5);
  }
};

const vectorStuff = () => {
  const v1D = vectorTs.create1D([1, 2, 3]);
  console.log(v1D, v1D.shape);

  const v2D = vectorTs.create2D([
    [1, 2, 3],
    [4, 5, 6],
  ]);
  console.log(v2D, v2D.shape);
};

export const App: React.FC = () => {
  const [currentEpoch, setCurrentEpoch] = React.useState(0);

  const onStartTraining = React.useCallback(() => {
    startTraining(setCurrentEpoch);
  }, []);

  React.useEffect(() => {
    vectorStuff();
  }, []);

  return (
    <div>
      <button onClick={onStartTraining}>Start Training</button>
      <p>Epoch: {currentEpoch}</p>
    </div>
  );
};
