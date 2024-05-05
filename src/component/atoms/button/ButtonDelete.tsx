interface propsType {
  setIsMatch: (isMatch: boolean) => void;
}

function ButtonDelete({ setIsMatch }: propsType) {
  return (
    <button
      className=" cursor-pointer px-2 hover:bg-green-300 hover:text-white"
      onClick={() => {
        setIsMatch(true);
      }}
    >
      Delete
    </button>
  );
}

export default ButtonDelete;
