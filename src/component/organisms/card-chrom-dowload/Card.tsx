import { useState } from "react";
import IconThreeDot from "../../atoms/icons/IconThreeDot";
import ButtonDelete from "../../atoms/button/ButtonDelete";
import ButtonEdit from "../../atoms/button/ButtonEdit";

interface CardProps {
  id: number;
  creator: string;
  fileName: string;
  fileImage: string;
  date: string;
  setIsPopup: (isPopup: boolean) => void;
  deleteItem: (index: number, deleteFilename: string, fileName: string) => void;
  setIsMatch: (isMatch: boolean) => void;
}

function Card({
  creator,
  fileName,
  fileImage,
  date,
  setIsPopup,
  setIsMatch,
}: CardProps) {
  const [isSetting, setIsSetting] = useState<boolean>(false);
  return (
    <div
      key={""}
      className="w-full border-solid border-[1px] rounded-lg  flex flex-row gap-5"
    >
      <div className="img w-[200px] overflow-hidden p-5 border-r-[1px]">
        <img src={fileImage} alt={fileImage} />
      </div>
      <div className=" relative p-5">
        <a href="">
          {fileName} {creator}
        </a>
        <span>
          ...https://us-easet-1.console.aws.amazon.com/
          jej9300339598958-kljksjfdlk034kmlajd0343034004
        </span>
        <span> {date} </span>
        <div
          className=" cursor-pointer absolute right-3 top-3"
          onClick={() => setIsSetting((prev) => !prev)}
        >
          <IconThreeDot prop=" rotate-90" />
        </div>
        {isSetting && (
          <div className=" absolute right-5 top-10 bg-gray-300 rounded-md overflow-hidden flex flex-col items-start">
            <ButtonEdit />
            <ButtonDelete setIsMatch={setIsMatch} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
