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
}

const ThemContext = createContext<ThemContextProviderProps>(
  {} as ThemContextProviderProps
);
export const ThemProvider = () => useContext(ThemContext);
function ThemContextProvider({ children }: childrenType) {
  const [data, setData] = useState<dataType[]>([]);
  const [search, setSearch] = useState<string>("");
  return (
    <ThemContext.Provider
      value={{
        data: data,
        setData: setData,
        search: search,
        setSearch: setSearch,
      }}
    >
      {children}
    </ThemContext.Provider>
  );
}

export default ThemContextProvider;
