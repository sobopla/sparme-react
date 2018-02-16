import { ADD_CHARITY } from "./types.js";

export function addCharity(index) {
  // CONNNECT API CALL TO UPDATE charity

  return {
    type: ADD_CHARITY,
    payload: index
  };
}
