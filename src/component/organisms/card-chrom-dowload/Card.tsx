import { useState } from "react";
import IconThreeDot from "../../atoms/icons/IconThreeDot";
import ButtonDelete from "../../atoms/button/ButtonDelete";
import ButtonEdit from "../../atoms/button/ButtonEdit";

interface CardProps {
  props: {
    id: number;
    creator: string;
    fileName: string;
    fileImage: string;
    date: string;
    setIsMatch: (isMatch: boolean) => void;
    setCatchId: (catchId: number) => void;
    setIsUpdate: (isUpdate: boolean) => void;
  };
}

function Card({ props }: CardProps) {
  const [isSetting, setIsSetting] = useState<boolean>(false);
  const setIsMatch = props.setIsMatch;
  const setCatchId = props.setCatchId;
  const setIsUpdate = props.setIsUpdate;
  return (
    <div className="h-[120px] w-full border-solid border-[1px] rounded-lg  flex flex-row items-center gap-5 overflow-hidden">
      <div className="img w-[30%] h-[100] object-cover overflow-hidden p-10 border-r-[1px] ">
        <img src={props.fileImage} alt={props.fileImage} />
      </div>
      <div className=" w-[70%] flex flex-col relative p-5">
        <a href="">{props.creator}</a>
        <span>
          ...https://us-easet-1.console.aws.amazon.com/ {props.fileName}
        </span>
        <span className="mt-2"> {props.date} </span>
        <div
          className=" cursor-pointer absolute right-1 top-3"
          onClick={() => setIsSetting((prev) => !prev)}
        >
          <IconThreeDot prop=" rotate-90 absolute right-2 top-1" />
        </div>
        {isSetting && (
          <div className=" absolute right-5 top-10 bg-gray-300 rounded-md overflow-hidden flex flex-col justify-start items-start">
            <ButtonEdit
              setIsUpdate={setIsUpdate}
              setCatchId={setCatchId}
              id={props.id}
            />
            <ButtonDelete
              setIsMatch={setIsMatch}
              setCatchId={setCatchId}
              id={props.id}
              // setVerifyDelete={setVerifyDeletes}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
