import { useState } from "react";
import Card from "../component/organisms/Card";
import Popup from "../component/Popup";
import PopupConfirmDelete from "../component/PopupConfirmDelete";
export interface dataType {
  id?: number;
  creator: string;
  fileName: string;
  fileImage: string;
  date: string;
}

function ChromeDownload() {
  const data: dataType[] = [
    {
      id: 1,
      creator: "seyha",
      fileName: "document",
      fileImage: "hello.jpg",
      date: "2024-05-02",
    },
  ];
  const [isPopup, setIsPopup] = useState<boolean>(false);
  const [isMatch, setIsMatch] = useState<boolean>(false);
  const [datas, setDatas] = useState<dataType[]>(data);
  const [search, setSearchDAta] = useState<string>("")
  console.log(isMatch);
  const addNewItem = (newItem: dataType) => {
    setDatas([...datas, newItem]);
  };



  
   // function to handle location filter using search value
   const filterLocation = () => {
    let filteredLocation = datas;
    // filter location
    if (search !== "") {
      filteredLocation = filteredLocation.filter((item) =>
        item.creator
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase())
      );
    }
    return filteredLocation;
  };

  const filterLocations = filterLocation();


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
    const updatedDatas = datas.filter((_, i) => i !== index);
    setDatas(updatedDatas);
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

        <div className="content-item">
          <div key={""} className="box-item">
            {filterLocations.map((item, key) => (
              <Card
                {...item}
                key={key}
                setIsPopup={setIsPopup}
                deleteItem={deleteItem}
                setIsMatch={setIsMatch}
              />
            ))}
          </div>
        </div>
      </section>
      <button
        type="button"
        className="absolute bottom-5 right-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={() => setIsPopup(true)}
      >
        Create New +
      </button>

      {isPopup && <Popup setIsPopup={setIsPopup} addNewItem={addNewItem} />}
      {isMatch && (
        <PopupConfirmDelete setIsMatch={setIsMatch} deleteItem={deleteItem} />
      )}
    </>
  );
};

export default ChromeDownload;
