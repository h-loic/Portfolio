import React, { useState, useContext, createContext } from 'react';

import { dictionaryList } from '../languages/index';
// create the language context with default selected language
export const LanguageContext = createContext({
  userLanguage: 'GB',
  dictionary: dictionaryList.en
});

// it provides the language context to app
function LanguageProvider(props) {
    const [userLanguage, setUserLanguage] = useState('GB');

    return <LanguageContext.Provider value={{userLanguage,setUserLanguage,dictionary : dictionaryList[userLanguage]}} {...props}/>;
};

function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
    throw new Error('useData must be used within a OrderInfoProvider');
    }
    return context;
}

export { LanguageProvider, useLanguage };