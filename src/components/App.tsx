import * as React from "react";
import { Sequential } from "../ml/models";
import { Dense } from "../ml/layers";
import { Vector2D } from "../ml/vector";

const startTraining = () => {
  // const model = new Sequential();
  // model.add(new Dense());
  // model.add(new Dense());
  // model.summary();

  const v1 = new Vector2D([
    [1, 3],
    [4, 5],
    [8, 2],
    [8, 2],
  ]);

  console.log(v1.shape);
};

export const App: React.FC = () => {
  React.useEffect(() => {
    startTraining();
  });

  return <div>Hello, world!</div>;
};
