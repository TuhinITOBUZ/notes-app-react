import { useEffect, useState } from "react";
import "./App.css";
import Note from "./components/Note";
import CreateNote from "./components/CreateNote";
import ViewNote from "./components/ViewNote";
import UpdateNote from "./components/UpdateNote";

function App() {
  const [notes, setNotes] = useState([]);
  const [openCreateNote, setOpenCreateNote] = useState(false);
  const [openViewNote, setOpenViewNote] = useState(false);
  const [openUpdateNote, setOpenUpdateNote] = useState(false);
  const [updateId, setUpdateId] = useState("");
  const [heading, setHeading] = useState("");
  const [details, setDetails] = useState("");
  const [toggle, setToggle] = useState(false);

  async function getNotes() {
    const response = await fetch("http://localhost:3000/tasks").then(
      (response) => {
        return response.json();
      }
    );
    setNotes(response.data);
  }

  // setInterval(() => {
  //   getNotes();
  // }, 1000);

  useEffect(() => {
    getNotes();
  }, [openCreateNote, toggle]);

  return (
    <section className="relative h-[100vh]">
      {openUpdateNote ? (
        <UpdateNote
          setOpenUpdateNote={setOpenUpdateNote}
          heading={heading}
          details={details}
          updateId={updateId}
        />
      ) : (
        ""
      )}
      {openViewNote ? (
        <ViewNote
          setOpenViewNote={setOpenViewNote}
          heading={heading}
          details={details}
        />
      ) : (
        ""
      )}
      {openCreateNote ? (
        <CreateNote setOpenCreateNote={setOpenCreateNote} />
      ) : (
        ""
      )}
      <div
        onClick={() => {
          setOpenCreateNote(true);
        }}
        className="flex justify-center items-center flex-col gap-4 p-2 m-2 absolute bottom-0 end-0 z-10 rounded-full bg-[#e9edc9] transition-all duration-200 ease-out cursor-pointer hover:translate-y-[-2rem] scale-[1.05]"
      >
        <i className="fa-solid fa-plus text-[2rem] md:text-[4rem]"></i>
      </div>
      <h1 className="text-center text-[3.5rem]">My Note App</h1>
      <div
        id="taskList"
        className="task-list w-[100%] flex flex-wrap gap-4 p-4 justify-center items-center"
      >
        {notes.map((note, index) => {
          return (
            <Note
              key={index}
              heading={note.heading}
              details={note.details}
              id={note._id}
              setUpdateId={setUpdateId}
              setToggle={setToggle}
              toggle={toggle}
              setOpenViewNote={setOpenViewNote}
              setHeading={setHeading}
              setDetails={setDetails}
              setOpenUpdateNote={setOpenUpdateNote}
            />
          );
        })}
      </div>
    </section>
  );
}

export default App;
