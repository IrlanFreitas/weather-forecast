// import logo from './logo.svg';
import React from 'react'
import Weather from './views/Weather.jsx'
// import CityContext from './context/city.jsx'
import { CityProvider } from "./providers/city";

export default function App() {
  return (
    <CityProvider>
      <Weather />
    </CityProvider>
  );
}

