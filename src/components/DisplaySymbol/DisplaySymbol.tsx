import { observer } from "mobx-react-lite";
import { getCoinList, getNoData } from "./DisplaySymbolHelpers";

interface ICryptoValue {
    cryptoSymbol: Array<string> | undefined
}

export const DisplaySymbols: React.FC<ICryptoValue> = observer(({ cryptoSymbol }): JSX.Element => { 
    const renderResults = cryptoSymbol && cryptoSymbol.length !== 0 ? getCoinList(cryptoSymbol) : getNoData();
    return (
        renderResults
    );
});