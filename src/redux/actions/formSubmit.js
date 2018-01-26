import { FORM_SUBMIT } from "./types.js";

export function formSubmissionHandler(values) {
  return {
    type: FORM_SUBMIT,
    payload: values
  };
}
