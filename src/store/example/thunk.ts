import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import {
  fetchExampleRequest,
  fetchExampleSuccess,
  fetchExampleFailure
} from "./actions";
import { AppState } from "../";

/**
 * Example thunk.
 *
 * Will fail rarely to demonstrate the failure action.
 *
 * @param count
 */
export const fetchExample = (
  count: number
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  dispatch(fetchExampleRequest());

  setTimeout(() => {
    var randomErrorNum = Math.floor(Math.random() * count) + 1;

    if (randomErrorNum === count) {
      dispatch(fetchExampleFailure("Unable to increment count."));
    } else {
      dispatch(fetchExampleSuccess(count + 10));
    }
  }, 1000);
};
