import { CHANGE_AUTH } from "./types.js";

export function changeAuth(auth) {
  return {
    type: CHANGE_AUTH,
    auth: auth
  };
}
