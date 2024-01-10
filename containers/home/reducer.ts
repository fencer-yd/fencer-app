import { IAction } from "type/saga";

import { Action } from "./type";

interface IState {
  loading: boolean;
  number: number;
}

const initialState: IState = {
  loading: false,
  number: 0,
};

export default function homeReducer(state = initialState, action: IAction) {
  switch (action.type) {
    case Action.INCREASE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Action.INCREASE_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        number: state.number + 1,
      };
    case Action.INCREASE_REQUEST_FAILED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
