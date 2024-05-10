import { ThemProvider } from "../../../utils/ThemProvider";

interface propsType {
  // setIsUpdate: (isUpdate: boolean) => void;
  setCatchId: (isCatchId: number) => void;
  id: number ;
}

function ButtonEdit({  setCatchId, id }: propsType) {
  const {setIsUpdate} = ThemProvider();
  return (
    <button
      className=" cursor-pointer px-2 hover:bg-green-300 hover:text-white w-full"
      onClick={() => {
        setIsUpdate(true);
        setCatchId(id);
      }}
    >
      Edit
    </button>
  );
}

export default ButtonEdit;
