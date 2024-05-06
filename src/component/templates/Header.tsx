
import LogoChromeAndTitle from "../moleules/headers/LogoChromeAndTitle";
import SearchBox from "../moleules/headers/SearchBox";

export interface setSearchDataProp{
  setSearchData : (search : string) => void;
}

function Header({setSearchData}: setSearchDataProp) {
  return (
    <header className="w-full sticky py-5">
      <div className=" w-[1400px] m-auto flex flex-row justify-between items-center">
        <LogoChromeAndTitle/>
        <SearchBox setSearchData = {setSearchData}/>
        <div className="setting ">
          <i className="bi bi-three-dots-vertical"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
