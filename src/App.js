import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom";

import {Home} from "./pages/home/Home";
import {CountryCategory} from "./pages/countryCategory/CountryCategory";
import {CountryDetails} from "./pages/countryDetails/CountryDetails";
import { CountryList } from './pages/countryList/CountryList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:countryID" element={<CountryCategory />} />
        <Route path="/cities/:cityID" element={<CountryList />} />
        <Route path="/destination/:ID" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
