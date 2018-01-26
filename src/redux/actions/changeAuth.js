import { CHANGE_AUTH } from "./types.js"

export function changeAuth(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    user: isLoggedIn
  }
}
