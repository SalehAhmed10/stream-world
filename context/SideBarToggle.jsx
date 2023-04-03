import { useContext, createContext, useState } from "react";

const SideBarToggleContext = createContext();

export default function SideBarToggleProvider({ children }) {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    
    return (
        <SideBarToggleContext.Provider value={{ isSideBarOpen, setIsSideBarOpen }}>
        {children}
        </SideBarToggleContext.Provider>
    );
    }

    
// export function useNavToggle() {
//     return useContext(NavToggleContext);
// }

export function useSideBarToggle() {
    return useContext(SideBarToggleContext);
}

