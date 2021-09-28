import React, { useState } from "react";
import separator from "../../images/separator.svg";
import emailjs from "emailjs-com";
import { userID } from "../../EmailJS-userID";
import { useContext } from "react/cjs/react.development";
import { StateContext } from "../../StateProvider";

export default function ContactMe() {
  const [state] = useContext(StateContext);

  const [person, setPerson] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  function handleInputTyping(inputType, inputData) {
    setPerson((prevData) => {
      return { ...prevData, [inputType]: inputData };
    });
  }

  function sendEmail(event) {
    event.preventDefault();

    emailjs
      .sendForm("gmail", "contact-me-portfolio", event.target, userID)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setPerson({
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
  }

  return (
    <div
      id="contact-me"
      className="bg-gray-250 w-full h-80 flex flex-col items-center h-auto"
    >
      <div
        className={`border-4 border-black p-5 w-56 h-16 flex items-center justify-center montserrat font-semibold text-2xl mt-20 ${
          state.currentLanguage === "Arabic" && "text-3xl"
        }`}
      >
        {state.currentLanguage === "English" ? "CONTACT" : "تواصل"}
      </div>
      <h1 className="text-2xl font-base mt-12 mb-8">
        {state.currentLanguage === "English"
          ? "I would love to hear from you!"
          : "!يسعدني أن أسمع رأيك"}
      </h1>
      <img src={separator} alt="separator" />
      <form
        className="w-5/12 xs:w-9/12 sm:w-9/12 flex flex-col items-center"
        onSubmit={sendEmail}
      >
        <input
          type="text"
          placeholder={
            state.currentLanguage === "English"
              ? "ENTER YOUR NAME*"
              : "*أدخل إسمك"
          }
          name="name"
          value={person.name}
          className={`${
            state.currentLanguage === "English" ? "border-l-4" : "border-r-4"
          } border-b-4 border-black w-full placeholder-gray-600 bg-transparent h-10 px-2 font-medium ${
            state.currentLanguage === "English" && "montserrat"
          } ${
            state.currentLanguage === "Arabic" && "text-right"
          } focus:outline-none mt-20`}
          onChange={(event) => handleInputTyping("name", event.target.value)}
          required
        />
        <input
          type="email"
          placeholder={
            state.currentLanguage === "English"
              ? "ENTER YOUR EMAIL*"
              : "*أدخل إيميلك"
          }
          name="email"
          value={person.email}
          className={`${
            state.currentLanguage === "English" ? "border-l-4" : "border-r-4"
          } border-b-4 border-black w-full placeholder-gray-600 bg-transparent h-10 px-2 font-medium ${
            state.currentLanguage === "English" && "montserrat"
          } ${
            state.currentLanguage === "Arabic" && "text-right"
          } focus:outline-none mt-20`}
          onChange={(event) => handleInputTyping("email", event.target.value)}
          required
        />
        <input
          type="number"
          placeholder={
            state.currentLanguage === "English" ? "PHONE NUMBER" : "رقم هاتفك"
          }
          name="phone-number"
          value={person.phoneNumber}
          className={`${
            state.currentLanguage === "English" ? "border-l-4" : "border-r-4"
          } border-b-4 border-black w-full placeholder-gray-600 bg-transparent h-10 px-2 font-medium ${
            state.currentLanguage === "English" && "montserrat"
          } ${
            state.currentLanguage === "Arabic" && "text-right"
          } focus:outline-none mt-20`}
          onChange={(event) =>
            handleInputTyping("phoneNumber", event.target.value)
          }
        />
        <textarea
          type="text"
          placeholder={
            state.currentLanguage === "English" ? "YOUR MESSAGE*" : "*رسالتك"
          }
          name="message"
          value={person.message}
          className={`${
            state.currentLanguage === "English" ? "border-l-4" : "border-r-4"
          } border-b-4 border-black w-full placeholder-gray-600 bg-transparent h-32 px-2 font-medium ${
            state.currentLanguage === "English" && "montserrat"
          } ${
            state.currentLanguage === "Arabic" && "text-right"
          } focus:outline-none mt-10`}
          onChange={(event) => handleInputTyping("message", event.target.value)}
          required
        />
        <input
          type="submit"
          className={`border-l-4 border-r-4 border-black w-40 h-10 ${
            state.currentLanguage === "English" && "montserrat"
          } font-semibold mt-16 mb-10 text-lg bg-transparent cursor-pointer`}
          value={state.currentLanguage === "English" ? "SUBMIT" : "أرسل"}
        />
      </form>
    </div>
  );
}
