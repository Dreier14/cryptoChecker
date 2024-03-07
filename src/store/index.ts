import React from 'react';
import { CryptoCurrencyStore } from './cryptoCurrencyStore';

export const store = Object.freeze({
    cryptoCurrencyStore: new CryptoCurrencyStore()
});

export const storeContext = React.createContext(store);
export const StoreProvider = storeContext.Provider;