import { UPDATE_RESULTS } from "./types.js";
// import axios from "axios-es6";

export function updateResults(results) {
  // const URL = "";
  // console.log("Let's do this!");
  // let request = axios.get(URL);
  let request = 'hi'
  return {
    type: UPDATE_RESULTS,
    payload: request
  };
}
