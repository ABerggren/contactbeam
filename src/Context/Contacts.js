import React from 'react';
import { contacts, favorites } from '../Data/data'

export const ContactContext = React.createContext();

// Provider, Consumer, useContext()

export default function Contacts({ children }) {

    return (
        <ContactContext.Provider value={{ contacts }}>
            {children}
        </ContactContext.Provider>
    )
}

