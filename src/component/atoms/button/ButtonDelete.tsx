import { ThemProvider } from "../../../utils/ThemProvider";

interface props {
  setIsMatch: (isMatch: boolean)=> void
  id: number
}



function ButtonDelete({setIsMatch, id}: props) {

  const {setCatchId} = ThemProvider();
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
