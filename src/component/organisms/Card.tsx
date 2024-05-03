import { useState } from "react";

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
    <div key={""} className="item">
      <div className="img w-[200px] overflow-hidden">
        <img src={fileImage} alt={fileImage} />
      </div>
      <div className="desc">
        <a href="">
          {fileName} {creator}
        </a>
        <span>
          ...https://us-easet-1.console.aws.amazon.com/
          jej9300339598958-kljksjfdlk034kmlajd0343034004
        </span>
        <span> {date}</span>
        <div
          className=" cursor-pointer absolute right-0 top-3"
          onClick={() => setIsSetting((prev) => !prev)}
        >
          <i className="bi bi-three-dots-vertical"></i>
        </div>
        {isSetting && (
          <div className=" absolute right-5 top-10 bg-gray-300 rounded-md overflow-hidden">
            <li
              className=" cursor-pointer px-2 hover:bg-green-300 hover:text-white"
              onClick={() => setIsPopup(true)}
            >
              Edit
            </li>
            <li
              className=" cursor-pointer px-2 hover:bg-green-300 hover:text-white"
              onClick={() => {
                setIsMatch(true);
              }}
            >
              Delete
            </li>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
