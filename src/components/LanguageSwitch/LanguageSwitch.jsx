import React, { useContext, useState } from "react";
import { StateContext } from "../../StateProvider";

export default function LanguageSwitch() {
  const [state, dispatch] = useContext(StateContext);
  const languages = ["Arabic", "English"];
  const [dropDown, setDropDown] = useState("hidden");

  const handleDropDownClick = () => {
    if (dropDown === "hidden") {
      setDropDown("block");
    } else {
      setDropDown("hidden");
    }
  };

  const selectLanguage = (event) => {
    setDropDown("hidden");
    dispatch({
      type: "SET_CURRENTLANGUAGE",
      currentLanguage: event.target.innerText,
    });
  };

  return (
    <div className="dropdown cursor-pointer relative raleway text-xl font-semibold text-gray-500 ml-5">
      <div
        id="dropdown-top"
        className={
          dropDown === "hidden"
            ? "flex justify-between items-center w-28"
            : "flex justify-between items-center w-28 border-b-2 border-gray-500"
        }
        onClick={handleDropDownClick}
      >
        <span>
          {state.currentLanguage === "Arabic" ? "عربي" : state.currentLanguage}
        </span>
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
        </svg>
      </div>
      <ul className={dropDown + " dropdown-menu absolute text-lg w-full"}>
        {languages
          .filter((lang) => lang !== state.currentLanguage)
          .map((el) => (
            <li key={el} className="mt-2 w-full" onClick={selectLanguage}>
              {el}
            </li>
          ))}
      </ul>
    </div>
  );
}
