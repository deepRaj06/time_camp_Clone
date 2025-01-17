import { getItemFromLocal, saveItemToLocal } from "../../utils/localStorage";
import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAILURE
} from "./actionTypes";

const initialState = {
  googleUser: [],
  token: getItemFromLocal("token") || false,
  user: getItemFromLocal("user") || {},
  isAuthLoading: false,
  isError: false,
};

export const AuthReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_SIGNUP_REQUEST:
      return {
        ...state,
        isAuthLoading: true,
        isError: false,
      };
    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthLoading: false,
        isError: false,
      };
    case USER_SIGNUP_FAILURE:
      return {
        ...state,
        isAuthLoading: false,
        token: null,
        isError: true,
      };
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        isAuthLoading: true,
        isError: false,
      };
    case USER_LOGIN_SUCCESS:
      saveItemToLocal("token", payload.token);
      saveItemToLocal("user", payload.user);
      return {
        ...state,
        isAuthLoading: false,
        googleUser: payload,
        token: payload.token,
        user: payload.user,
        isError: false,
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        isAuthLoading: false,
        token: null,
        isError: true,
      };
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthLoading: false,
        token: null,
        user: {},
        isError: true,
      };



    default:
      return state;
  }
};
