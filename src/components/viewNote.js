export default function viewNote({ setOpenViewNote, heading, details }) {
  return (
    <div className="flex flex-col gap-2 z-20 absolute w-[100%] backdrop-blur-md h-[100%] justify-center items-center">
      <div className="close-button absolute top-0 end-0 p-3 cursor-pointer hover:scale-[1.1]">
        <i
          onClick={() => {
            setOpenViewNote(false);
          }}
          className="fa-sharp fa-solid fa-square-xmark text-[2rem] p-2"
        ></i>
      </div>
      <h2 className="text-[3rem]">View Note</h2>
      <hr className="w-[85%] h-[10px]" />
      <h3 className="text-[2rem] p-2">{heading}</h3>
      <textarea
        className="text-lg rounded-lg p-2 w-[80%] min-h-[20rem]"
        readOnly
        value={details}
      ></textarea>
    </div>
  );
}
