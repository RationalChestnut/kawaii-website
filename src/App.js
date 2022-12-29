import { useEffect } from "react";
import { Gallery } from "./Gallery/Gallery.page";
import { Landing } from "./Landing/Landing.page";
import { Contact } from "./Contact/Contact.page";
import { Navigation } from "./Navigation/Navigation.page";
import { isAndroid, isIOS } from "react-device-detect";

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
    <div className="App">
      <Navigation />
      <Landing />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
