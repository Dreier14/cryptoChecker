import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { IComponentProps } from '../../interfaces/IComponentProps';
import { Input } from '../Input/Input';
import { DisplaySymbols } from '../DisplaySymbol/DisplaySymbol';
import { ChartGenerator } from '../ChartGenerator/ChartGenerator';

// The Home component will serve as the base entry point for our application as we add more components.

export const Home: React.FC<IComponentProps> = observer(({ store }): JSX.Element => {

    useEffect(() => {
        store.getAllCryptoData();
    }, [store]);

    return (
        <>
            <Input store={store}/>
                <br/>
            <DisplaySymbols cryptoSymbol={store.cryptoSymbol}/>
                <br/>
            <ChartGenerator cryptoSymbol={store.cryptoSymbol} cryptoData={store.cryptoData}/>
        </>
    );
});