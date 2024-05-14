import React from 'react';
import '../src/styles/style.css'
import { AppComponent } from './Components/App/AppComponent';
import { HeaderApp } from './Components/App/HeaderApp/HeaderApp';
import { TopicSelection } from './Components/App/ChoiceComponent/TopicSelection';

function App() {
  return (
    <>
    <HeaderApp/>
    <TopicSelection/>
    </>
  );
}

export default App;
