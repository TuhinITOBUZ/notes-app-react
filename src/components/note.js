export default function Note({
  heading,
  details,
  id,
  setToggle,
  toggle,
  setOpenViewNote,
  setHeading,
  setDetails,
  setOpenUpdateNote,
  setUpdateId,
}) {
  async function handleNoteDelete() {
    await fetch(`http://localhost:3000/delete_task`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ _id: id }),
    }).then(toggle ? setToggle(false) : setToggle(true));
  }
  return (
    <div className="task p-2 relative bg-[#e9edc9] border-[1px] border-black rounded-[10px] min-w-[15rem] min-h-[7rem] transition-all duration-200 ease-in-out hover:border-0 cursor-pointer">
      <h2 className="w-[75%] overflow-auto text-[1.5rem]">{heading}</h2>
      <p className="w-[85%] text-sm max-h-[40vh] max-w-[15rem] overflow-auto text-justify">
        {details}
      </p>
      <div className="absolute top-0 end-0 flex flex-col gap-2 p-1">
        <button
          className="view-button border-0 bg-transparent"
          onClick={() => {
            setOpenViewNote(true);
            setHeading(heading);
            setDetails(details);
          }}
        >
          <i className="fa-regular fa-eye"></i>
        </button>
        <button
          className="edit-button border-0 bg-transparent"
          onClick={() => {
            setUpdateId(id);
            setHeading(heading);
            setDetails(details);
            setOpenUpdateNote(true);
          }}
        >
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button
          className="delete-button border-0 bg-transparent"
          onClick={() => {
            handleNoteDelete();
          }}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}
