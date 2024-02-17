import {
  createVector1DFromArray,
  createVector2DFromArray,
} from "./createVectorFromArray";
import { xavierInitialization } from "./generate";

export const vectorTs = {
  create1D: createVector1DFromArray,
  create2D: createVector2DFromArray,

  random: {
    xavier: xavierInitialization,
  },
};
