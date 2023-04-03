
import { createContext, useContext, useState } from "react";

const SearchLoadingContext = createContext();

export default function SearchLoadingProvider({ children }) {
    const [isSearchLoading, setIsSearchLoading] = useState(false);
    
    return (
        <SearchLoadingContext.Provider value={{ isSearchLoading, setIsSearchLoading }}>
        {children}
        </SearchLoadingContext.Provider>
    );
    }

    export function useSearchLoading() {
    return useContext(SearchLoadingContext);
}







    