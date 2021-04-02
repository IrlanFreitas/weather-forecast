import React from 'react'
import Weather from './views/Weather.jsx'
import { IndexProvider } from "./providers";
import './App.css'

export default function App() {
  return (
    <IndexProvider>
      <Weather />
    </IndexProvider>
  );
}

