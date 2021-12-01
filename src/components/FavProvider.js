//customised hook
import React, { useContext, useState } from 'react'

const FavouritesContext = React.createContext()
const UpdateContext = React.createContext();

export const useFavourites = () => {
    return useContext(FavouritesContext);
}

export const useFavUpdate = () => {
    return useContext(UpdateContext);
}

export const FavProvider = ({ children }) => {
    const [favCharacter, setFavCharacter] = useState([]);

    const toggleFavCharacter = (character) => {
        setFavCharacter(fav => {
            if (!fav.includes(character)) {
                return [...fav, character];
            }
            else {
                return fav.filter(item => item !== character)
            }
        })
    }

    return (
        <FavouritesContext.Provider value={favCharacter}>
            <UpdateContext.Provider value={toggleFavCharacter}>
                {children}
            </UpdateContext.Provider>
        </FavouritesContext.Provider>
    )
}