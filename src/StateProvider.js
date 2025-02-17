import React, { createContext, useReducer } from "react";

export const StateContext = createContext();

const initialState = {
  menuDisp: false,
  screenWidth: window.innerWidth,
  currentLanguage: "English",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_MENU":
      return { ...state, menuDisp: action.menuDisp };
    case "SET_SCREENWIDTH":
      return { ...state, screenWidth: action.screenWidth };
    case "SET_CURRENTLANGUAGE":
      return { ...state, currentLanguage: action.currentLanguage };
    default:
      return state;
  }
};
export const StateProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {props.children}
    </StateContext.Provider>
  );
};
