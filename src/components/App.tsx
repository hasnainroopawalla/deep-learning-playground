import * as React from "react";
import { startTrainingGenerator } from "../ml";
import { vectorTs } from "../vectorTs";
import { Sequential } from "../ml/models";
import { Dense } from "../ml/layers";

const startTraining = (setCurrentEpoch: (_epoch: number) => void) => {
  const gen = startTrainingGenerator(1000);

  for (const epoch of gen) {
    setTimeout(() => setCurrentEpoch(epoch), epoch * 5);
  }
};

const vectorStuff = () => {
  const model = new Sequential();
  model.add(new Dense(3, 18));

  const v1 = vectorTs.create2D([
    [1, 2, 3],
    [4, 5, 6],
  ]);
  const v2 = vectorTs.create2D([
    [7, 8],
    [9, 10],
    [11, 12],
  ]);

  console.log("final", v1.dot(v2));
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
