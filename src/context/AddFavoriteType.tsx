import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface AddFavoriteType {
    favorites: Array<{ id: number; title: string}>;
    addToFavorites: (item: { id: number; title: string }) => void;

}

const FavoritesContext = createContext<AddFavoriteType | undefined>(undefined);

export const useFavoritesContext = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error('useFavoritesContext must be used within a FavoritesProvider');
    }
    return context;
};

interface FavoritesProviderProps {
    children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {

    const [favorites, setFavorites] = useState<Array<{ id: number; title: string;}>>([]);

    const addToFavorites = (item: { id: number; title: string}) => {
        setFavorites((prevFavorites) => [...prevFavorites, item]);
    };

  

    const value: AddFavoriteType = {
        favorites,
        addToFavorites,
      
    };

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    );
};
