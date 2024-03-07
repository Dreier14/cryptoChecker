import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { CryptoCurrencyStore } from './store/cryptoCurrencyStore';

export default (
    <Routes>
        <Route path="/" element={<Home store={new CryptoCurrencyStore()}/>} />
    </Routes>
);