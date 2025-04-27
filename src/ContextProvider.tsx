import React,{ ReactNode,createContext,useState } from "react";

export type NavigationContextType = 'About'|"Project"|"Contact"
export type ThemeContextType = 'Light'|"Dark"

export interface ContextValueType{
    dataContext:{
        navContext: NavigationContextType;
    },
    setDataContext: (value:{navContext:NavigationContextType}) => void
}
interface ContextProviderPropsType{
    children: ReactNode
}
export const Context = createContext<ContextValueType|undefined>(undefined)

export const ContextProvider : React.FC<ContextProviderPropsType> = ({children})=> {
    const [context,setContext]  = useState<{navContext: NavigationContextType;}>({navContext:"About"})
    const setDataContext = (dataContext:{ navContext: NavigationContextType}) => {
        setContext({...dataContext})
    }
    const contextValue = {
        dataContext: {...context},
        setDataContext:setDataContext
    }
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}
export default ContextProvider