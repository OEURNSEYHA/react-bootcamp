import { IoIosSearch } from "react-icons/io";

interface props {
  prop?: string;
}

function IconSearch({ prop }: props) {
    console.log(prop)
  return (
    <>
      <IoIosSearch className={prop} />
    </>
  );
}

export default IconSearch;
