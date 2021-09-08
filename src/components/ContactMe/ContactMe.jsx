import React, { useState } from "react";
import separator from "../../images/separator.svg";
import emailjs from "emailjs-com";
import { userID } from "../../EmailJS-userID";

export default function ContactMe() {
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
    <div className="bg-gray-250 w-full h-80 flex flex-col items-center h-auto">
      <div className="border-4 border-black p-5 w-56 h-16 flex items-center justify-center montserrat font-semibold text-2xl mt-20">
        CONTACT
      </div>
      <h1 className="text-2xl font-base mt-12 mb-8">
        I would love to hear from you!
      </h1>
      <img src={separator} alt="separator" />
      <form
        className="w-5/12 sm:w-9/12 flex flex-col items-center"
        onSubmit={sendEmail}
      >
        <input
          type="text"
          placeholder="ENTER YOUR NAME*"
          name="name"
          value={person.name}
          className="border-l-4 border-b-4 border-black w-full placeholder-gray-600 bg-transparent h-10 px-2 font-medium montserrat focus:outline-none mt-20"
          onChange={(event) => handleInputTyping("name", event.target.value)}
          required
        />
        <input
          type="email"
          placeholder="ENTER YOUR EMAIL*"
          name="email"
          value={person.email}
          className="border-l-4 border-b-4 border-black w-full placeholder-gray-600 bg-transparent h-10 px-2 font-medium montserrat focus:outline-none mt-10"
          onChange={(event) => handleInputTyping("email", event.target.value)}
          required
        />
        <input
          type="number"
          placeholder="PHONE NUMBER"
          name="phone-number"
          value={person.phoneNumber}
          className="border-l-4 border-b-4 border-black w-full placeholder-gray-600 bg-transparent h-10 px-2 font-medium montserrat focus:outline-none mt-10"
          onChange={(event) =>
            handleInputTyping("phoneNumber", event.target.value)
          }
        />
        <textarea
          type="text"
          placeholder="YOUR MESSAGE*"
          name="message"
          value={person.message}
          className="border-l-4 border-b-4 border-black w-full placeholder-gray-600 bg-transparent h-32 px-2 font-medium montserrat focus:outline-none mt-10"
          onChange={(event) => handleInputTyping("message", event.target.value)}
          required
        />
        <input
          type="submit"
          className="border-l-4 border-r-4 border-black w-40 h-10 montserrat font-semibold mt-16 mb-10 text-lg bg-transparent cursor-pointer"
          value="SUBMIT"
        />
      </form>
    </div>
  );
}
