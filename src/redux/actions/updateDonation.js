import { UPDATE_DONATION } from "./types.js";
// import axios from "axios-es6";

export function updateDonation(amount) {
  // const URL = "";
  // console.log("Let's do this!");
  // let request = axios.get(URL);

  return {
    type: UPDATE_DONATION,
    payload: amount
  };
}
