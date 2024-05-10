import { useState } from "react";
import Popup from "../component/Popup";
import PopupConfirmDelete from "../component/PopupConfirmDelete";
import CardList from "../component/organisms/card-chrom-dowload/CardList";

import PopupEdit from "../component/PopupEdit";
import { ThemProvider } from "../utils/ThemProvider";
export interface dataType {
  id: number;
  creator: string;
  fileName: string;
  fileImage: string;
  date: string;
}
export interface verifyDelete {
  id: number;
  fileName: string;
}

// file name 2mb
// creator > 3 charater

function ChromeDownload() {
  const {data, setData , search } = ThemProvider();
  
  const [isPopup, setIsPopup] = useState<boolean>(false);
  const [isMatch, setIsMatch] = useState<boolean>(false);

 
  const [catchId, setCatchId] = useState<number | undefined>();
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [isPopupEdit, setIsPopupEdit] = useState<boolean>(false);
  
  const addNewItem = (newItem: dataType) => {
    const newId = data.length + 1;
    const newItemWithId = { ...newItem, id: newId };
    setData([...data, newItemWithId]);
  };


  // function to handle location filter using search value
  const filterData = () => {
    let filtered = data;
    // filter location
    if (search !== "") {
      filtered = filtered.filter((item) =>
        item.creator.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
    }
    return filtered;
  };

  const filterDatas = filterData();

  // Function to delete an existing item
  const deleteItem = (
    index: number,
    deleteFilename: string,
    fileName: string
  ) => {
    if (deleteFilename !== fileName) {
      alert("incorrect delete filename");
      return;
    }
    const updatedDatas = data.filter((i) => i.id !== index);
    setData(updatedDatas);
  };
  return (
    <>
  
      <section className="wrap-page">
        <div style={{ display: "flex" }}>
          <div
            style={{ width: "20px", height: "20px", marginLeft: "10px" }}
            onClick={() => alert("hello")}
          >
            <i className="bi bi-buildings"></i>
          </div>
          Your <a href=""> Profile is managed </a>by sabaicode.com
        </div>

        <div className="w-[670px] mt-5">
          <CardList
            props={{
              data: filterDatas,
              setIsMatch: setIsMatch,
              setCatchId: setCatchId,
              setIsUpdate: setIsUpdate,
              
            }}
          />
        </div>
      </section>

      {isUpdate ? (
        <button
          type="button"
          className="absolute bottom-5 right-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => {
            setIsPopupEdit(true);
          }}
        >
          Update
        </button>
      ) : (
        <button
          type="button"
          className="absolute bottom-5 right-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => {
            setIsPopup(true);
          }}
        >
          Create
        </button>
      )}

      {isPopup && (
        <Popup
          props={{
            setIsPopup: setIsPopup,
            addNewItem: addNewItem,
            data: data,
          }}
        />
      )}
      {isMatch && (
        <PopupConfirmDelete
          setIsMatch={setIsMatch}
          deleteItem={deleteItem}
          data={data}
          id={catchId}
        />
      )}

      {isPopupEdit && <PopupEdit setIsPopupEdit={setIsPopupEdit} data={data} setData= {setData} id={catchId} />}
    </>
  );
}

export default ChromeDownload;
