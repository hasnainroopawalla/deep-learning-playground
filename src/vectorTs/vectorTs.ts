import {
  sub,
  sum,
  multiply,
  clip,
  log,
  add,
  mean,
  negative,
  divide,
  exp,
  abs,
  maximum,
  eq1,
  eq2,
} from "./math";
import {
  arrayToVector1D,
  arrayToVector2D,
  xavierInitialization,
  zeros1D,
  zeros2D,
} from "./adapters";

export const vectorTs = {
  create1D: arrayToVector1D,
  create2D: arrayToVector2D,
  zeros1D: zeros1D,
  zeros2D: zeros2D,

  random: {
    xavier: xavierInitialization,
  },

  // arithmetic
  add,
  sub,
  multiply,
  divide,
  negative,
  eq1,
  eq2,

  // summarize
  sum,
  mean,

  // operations
  log,
  clip,
  exp,
  maximum,
  abs,
};
