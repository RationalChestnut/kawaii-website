import { useEffect } from "react";
import { Navigation } from "./Navigation/Navigation.page";
import { isAndroid, isIOS } from "react-device-detect";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainNavigator } from "./MainNavigator";
import { PrivacyPolicy } from "./PrivacyPolicy/PrivacyPolicy.page";

function App() {
  useEffect(() => {
    if (isAndroid) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.brianmason101.waifu.maker";
    } else if (isIOS) {
      window.location.href =
        "https://apps.apple.com/us/app/kawaii-ai-image-generator/id6444872562";
    }
  }, []);

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/*" element={<MainNavigator />} />
      </Routes>
    </Router>
  );
}

export default App;
