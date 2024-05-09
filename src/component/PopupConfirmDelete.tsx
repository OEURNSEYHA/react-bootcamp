import { RxCross2 } from "react-icons/rx";
import { dataType } from "../pages/ChromeDownload";
import { useState } from "react";
interface PopupProps {
  setIsMatch: (isMatch: boolean) => void;
  deleteItem: (index: number, deleteFilename: string, fileName: string) => void;
  data: dataType[];
  id: number | undefined;
}

export default function PopupConfirmDelete({
  setIsMatch,
  deleteItem,
  data,
  id,
}: PopupProps): JSX.Element {
  const [fileNameDelete, setFileNameDelete] = useState<string>("");
  const filteredFileNames = data.filter(
    (item) => item.id === id
  );
  console.log(filteredFileNames)
  const fileName: string | "" =
    filteredFileNames.length > 0 ? filteredFileNames[0].fileName :  "";
    console.log(fileName)
    console.log(id)

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        onClick={() => setIsMatch(false)}
      ></div>
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 shadow-lg bg-white rounded-lg p-6">
        <div
          onClick={() => setIsMatch(false)}
          className="absolute top-3 right-3 w-6 h-6 cursor-pointer"
        >
          <RxCross2 />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center">
          Please confirm with filename
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="creator"
              className="block font-medium text-gray-900"
            >
              filename
            </label>
            <input
              id="creator"
              name="creator"
              type="text"
              autoComplete="off"
              required
              className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={(e) => setFileNameDelete(e.target.value)}
            />
          </div>
          <div className="flex justify-end gap-5">
            <button
              className=" bg-orange-300 px-3 py-1 rounded-[25px] text-white"
              onClick={() => setIsMatch(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                id !== undefined && deleteItem(id, fileNameDelete, fileName);
                setIsMatch(false);
              }}
              className=" bg-red-400 px-3 py-1 rounded-[25px] text-white"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
