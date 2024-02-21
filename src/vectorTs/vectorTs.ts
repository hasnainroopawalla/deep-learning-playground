import { arrayToVector1D, arrayToVector2D } from "./arrayToVector";
import { sum } from "./core/utils";
import { xavierInitialization, zeros1D, zeros2D } from "./create";

export const vectorTs = {
  create1D: arrayToVector1D,
  create2D: arrayToVector2D,
  zeros1D: zeros1D,
  zeros2D: zeros2D,

  random: {
    xavier: xavierInitialization,
  },

  math: {
    sum: sum,
  },
};
