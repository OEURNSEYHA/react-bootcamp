interface props {
  setIsMatch: (isMatch: boolean)=> void
  setCatchId: (catchId: number)=> void
  id: number
}

function ButtonDelete({setIsMatch, setCatchId, id}: props) {
  return (
    <button
      className=" cursor-pointer px-2 hover:bg-green-300 hover:text-white"
      onClick={() => {
        setIsMatch(true);
        setCatchId(id)
      }}
    >
      Delete
    </button>
  );
}

export default ButtonDelete;
