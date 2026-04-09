import { createContext, useContext, useState, type ReactNode } from "react";

interface MysteryContentContextType {
    showMysteryToggle: boolean;
    toggleMystery: () => void;
}

const MysteryContentContext = createContext<MysteryContentContextType | undefined>(undefined);

export const MysteryContentProvider = ({children} : { children: ReactNode }) => {
    const [showMysteryToggle, setShowMysteryToggle] = useState<boolean>(false);

    const toggleMystery = () => {
        setShowMysteryToggle(prev => !prev);
    }

    return (
        <MysteryContentContext.Provider value={{ showMysteryToggle, toggleMystery }}>
            {children}
        </MysteryContentContext.Provider>
    )
}

export const useMysteryContent = () => {
    const context = useContext(MysteryContentContext);
    if (!context) {
        throw new Error('useMysteryContent must be used within SpecialContentProvider')
    }
    return context;
}