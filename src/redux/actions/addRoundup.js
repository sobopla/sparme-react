import { ADD_ROUNDUP } from "./types.js";
// import axios from "axios-es6";

export function addRoundup(index) {
  // const URL = "";
  // console.log("Let's do this!");
  // let request = axios.get(URL);
  return {
    type: ADD_ROUNDUP,
    payload: index
  };
}
