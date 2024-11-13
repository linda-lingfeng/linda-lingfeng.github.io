import logo from './logo.svg';
import './App.css';
import NavigationBar from './NavigationBar';
import WebsiteMainContent from './WebsiteMainContent';
import { useState } from "react";

function App() {
  const [contentDisplayed, setContentDisplayed] = useState("about me");

  return (
    <div className="App">
      <NavigationBar
        setContentDisplayed={setContentDisplayed}
      />
      {/* Two Divs just to adjust the content so that it  */}
      <div className="body">
        <WebsiteMainContent
          contentDisplayed={contentDisplayed}
        >

        </WebsiteMainContent>
      </div>
    </div>
  );
}

export default App;
