import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }){
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {

        const handle = () => {
            setCurrentPath(window.location.pathname);
        }

        document.addEventListener('popstate', handle);

        return () => window.removeEventListener('popstate', handle);

    }, []);

    const navigate = (to) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    };

    return <NavigationContext.Provider value={{navigate, currentPath}}>
        {children}
    </NavigationContext.Provider>
}

export {NavigationProvider}
export default NavigationContext;