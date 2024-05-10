import { createContext, useContext, useState } from "react";
import { dataType } from "../pages/ChromeDownload";

interface childrenType {
  children: React.ReactNode;
}
interface ThemContextProviderProps {
  data: dataType[];
  setData: (data: dataType[]) => void;
  search: string;
  setSearch: (search: string) => void;
  catchId: number | undefined;
  setCatchId: (catchId: number) => void;
  isMatch: boolean;
  setIsMatch: (isMatch: boolean) => void;
  isUpdate: boolean;
  setIsUpdate: (isUpdate: boolean) => void;
  isPopup: boolean;
  setIsPopup: (isPopup: boolean) => void;
  isPopupEdit: boolean;
  setIsPopupEdit: (isPopupEdit: boolean) => void;
}

const ThemContext = createContext<ThemContextProviderProps>(
  {} as ThemContextProviderProps
);
export const ThemProvider = () => useContext(ThemContext);
function ThemContextProvider({ children }: childrenType) {
  const [data, setData] = useState<dataType[]>([]);
  const [search, setSearch] = useState<string>("");
  const [catchId, setCatchId] = useState<number | undefined>();
  const [isMatch, setIsMatch] = useState<boolean>(false);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [isPopup, setIsPopup] = useState<boolean>(false);
  const [isPopupEdit, setIsPopupEdit] = useState<boolean>(false);
  return (
    <ThemContext.Provider
      value={{
        data: data,
        setData: setData,
        search: search,
        setSearch: setSearch,
        catchId: catchId,
        setCatchId: setCatchId,
        isMatch: isMatch,
        setIsMatch: setIsMatch,
        isUpdate: isUpdate,
        setIsUpdate: setIsUpdate,
        isPopup: isPopup,
        setIsPopup: setIsPopup,
        isPopupEdit: isPopupEdit,
        setIsPopupEdit: setIsPopupEdit,
      }}
    >
      {children}
    </ThemContext.Provider>
  );
}

export default ThemContextProvider;
