import * as React from "react";
import { startTrainingGenerator } from "@dlp/ml";

const startTraining = (setCurrentEpoch: (epoch: number) => void) => {
  const gen = startTrainingGenerator(1000);

  for (const epoch of gen) {
    setTimeout(() => setCurrentEpoch(epoch), epoch * 5);
  }
};

export const App: React.FC = () => {
  const [currentEpoch, setCurrentEpoch] = React.useState(0);

  const onStartTraining = React.useCallback(() => {
    startTraining(setCurrentEpoch);
  }, []);

  return (
    <div>
      <button onClick={onStartTraining}>Start Training</button>
      <p>Epoch: {currentEpoch}</p>
    </div>
  );
};
