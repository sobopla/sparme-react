import { UPDATE_DONATION } from "./types.js";
// import axios from "axios-es6";

export function updateDOnation(amount) {
  // const URL = "";
  // console.log("Let's do this!");
  // let request = axios.get(URL);
  let request = 'hi'
  return {
    type: UPDATE_DONATION,
    payload: amount
  };
}
