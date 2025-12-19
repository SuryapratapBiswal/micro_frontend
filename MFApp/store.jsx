// Create a Context for the global state
// Create a Provider Component
// Create useContext Hook for easy access

import React, { createContext, useContext, useState } from 'react';

const ParentContext = createContext([[], () => {}]);

export const ParentContextProvider = ({ children }) => {
    return (
        <ParentContext.Provider value={useState([])}>
            {children}
        </ParentContext.Provider>
    );
}

export const useParentContext = ()=>{
    return useContext(ParentContext);
}