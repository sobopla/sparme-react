import { ADD_ROUNDUP } from "./types.js";
// import axios from "axios-es6";

// Action creator that is also performing API CALLS and then returning the action that the reducer gets as a parameter to update the store data
export function addRoundup(index) {
  // const URL = "";
  // console.log("Let's do this!");
  // let request = axios.get(URL);
  // CONNECT API HERE WITH API CALL TO UPDATE THE DATABASE DATABASE ROUNDUP ADDED TRUE OR FALSE

  return {// ACTION usually has a type (so that the correct reducer can be applied) and a payload (containng the data that the reducer needs in order to make the update)
    type: ADD_ROUNDUP,
    payload: index
  };
}
