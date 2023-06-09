import React from "react";
import { useState } from "react";

export default function UpdateNote({
  setOpenUpdateNote,
  heading,
  details,
  updateId,
}) {
  const [headingMessage, setHeadingMessage] = useState(heading);
  const [detailsMessage, setDetailsMessage] = useState(details);

  async function handleSubmit(e) {
    e.preventDefault();
    if (e.target.heading.value !== "" && e.target.details.value !== "") {
      const bodyDetails = {
        _id: updateId,
        heading: e.target.heading.value,
        details: e.target.details.value,
      };
      await fetch(`http://localhost:3000/modify_task`, {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(bodyDetails),
      }).then(setOpenUpdateNote(false));
    }
  }
  return (
    <div className="flex flex-col gap-2 z-20 absolute w-[100%] backdrop-blur-md h-[100%] justify-center items-center">
      <div className="close-button absolute top-0 end-0 p-3 cursor-pointer hover:scale-[1.1]">
        <i
          onClick={() => {
            setOpenUpdateNote(false);
          }}
          className="fa-sharp fa-solid fa-square-xmark text-[2rem] p-2"
        ></i>
      </div>
      <h2 className="text-center p-4 text-[2rem]">Update Note</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-2 w-[80%] justify-center items-center"
      >
        <input
          name="heading"
          placeholder="heading..."
          className="text-center p-2 m-2 w-[100%] overflow-auto border-2"
          type="text"
          value={headingMessage}
          onChange={(e) => {
            setHeadingMessage(e.target.value);
          }}
        />
        <textarea
          name="details"
          placeholder="Type your text here ..."
          className="p-2 m-2 w-[100%] min-h-[15rem] max-h-[25rem] overflow-auto border-2"
          value={detailsMessage}
          onChange={(e) => {
            setDetailsMessage(e.target.value);
          }}
        />
        <button
          type="submit"
          className="w-[20%] border-4 border-indigo-200 border-b-indigo-500"
        >
          Save
        </button>
      </form>
    </div>
  );
}
