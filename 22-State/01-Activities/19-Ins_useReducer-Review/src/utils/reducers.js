import { CHANGE, SUBMIT } from "./actions";

// Name has to be
// (letters || numbers)
// &&
// (be between 6 - 15 characters)
const nameRegex = /^[a-z0-9_-]{6,15}$/;

export const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE:
      console.log(action.payload.value.match(nameRegex));
      return {
        isValid: action.payload.value.match(nameRegex) ? true : false,
      };
    case SUBMIT:
      console.log(state, action);
      return {
        ...state,
        name: action.payload.value,
      };
    default:
      return state;
  }
};
