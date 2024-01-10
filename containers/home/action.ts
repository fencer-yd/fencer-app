import { Action } from "./type";

export function increaseRequest(data: number) {
  return {
    type: Action.INCREASE_REQUEST,
    payload: data,
  };
}

export function increaseSuccess(data: number) {
  return {
    type: Action.INCREASE_REQUEST_SUCCESS,
    payload: data,
  };
}

export function increaseFailed() {
  return {
    type: Action.INCREASE_REQUEST_FAILED,
  };
}
