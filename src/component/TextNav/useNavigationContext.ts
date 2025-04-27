import React, { useContext } from 'react'
import { NavigationContextType } from '../../ContextProvider'
import { Context } from '../../ContextProvider'

export interface useNavigationContextTypes {
  navigationContext: NavigationContextType,
  setNavigationContext: (parameter: NavigationContextType) => void
}
export const useNavigationContext = (): useNavigationContextTypes  => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useNavigationContext must be used within a ContextProvider");
  }
  const navigationContext = context.dataContext.navContext;
  const setNavigationContext = (link: NavigationContextType) => {
    context.setDataContext({ ...context.dataContext, navContext: link });
  };

  return {
    navigationContext,
    setNavigationContext
  };

}
