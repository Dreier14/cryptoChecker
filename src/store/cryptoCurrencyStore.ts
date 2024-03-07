import axios from 'axios';
import { action, makeObservable, observable } from 'mobx';

export class CryptoCurrencyStore {
    @observable isLoading: boolean = true;
    @observable cryptoData: Array<Record<string, string| number>> | undefined = undefined;
    @observable cryptoSymbol: Array<string> | undefined = [];

    constructor() {
        makeObservable(this);
    }

    @action
    setIsLoading(isLoading: boolean): void {
        this.isLoading = isLoading;
    }

    @action
    setCryptoCurrencySymbol(cryptoSymbol: string): void {
        const cryptoArr = this.cryptoSymbol;
        this.cryptoSymbol = cryptoArr?.concat(cryptoSymbol.toUpperCase());
    }

    @action
    setCryptoCurrencyData(cryptoData: Array<Record<string, string| number>> | undefined): void {
        this.cryptoData = cryptoData;
    }

    @action
    async getAllCryptoData(): Promise<void> {
        try {
            this.setIsLoading(true);
            // We could create a helper function to also get the endpoint and configure it depending on the environment.
            const response: Record<
                string,
                Record<string ,Array<Record<string, string| number>>>
            > = await axios.get('https://api.coinlore.net/api/tickers/');
            this.setCryptoCurrencyData(response.data.data);
        } catch (e: unknown) {
            // We want to have an error to the console for the developers if the API has an issue.
            console.error(e);
        } finally {
            this.setIsLoading(false);
        }
    }
}