

/// here we define the constants for the app ///

import { createContext, useContext } from "react";


const AppConstants = createContext()


const constants = {
    appName: "Next.js App",
    appDescription: "A Next.js app with Tailwind CSS and TypeScript",
    appUrl: "https://nextjs-tailwind-typescript.vercel.app",
    apiImagePath: "https://image.tmdb.org/t/p/w500",
    apiCardImagePath: "https://image.tmdb.org/t/p/w300",
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
}


export default function ConstantsProvider({ children }) {
    return (
        <AppConstants.Provider value={constants}>
            {children}
        </AppConstants.Provider>
    )
}


export function useConstants() {
    return useContext(AppConstants)
}


//

