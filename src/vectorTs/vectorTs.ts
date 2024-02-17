import { arrayToVector1D, arrayToVector2D } from "./createVectorFromArray";
import { xavierInitialization, zeros } from "./generate";

export const vectorTs = {
  create1D: arrayToVector1D,
  create2D: arrayToVector2D,
  zeros: zeros,

  random: {
    xavier: xavierInitialization,
  },
};
