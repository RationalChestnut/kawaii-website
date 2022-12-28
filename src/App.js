import { Gallery } from "./Gallery/Gallery.page";
import { Landing } from "./Landing/Landing.page";
import { Contact } from "./Contact/Contact.page";
import { Navigation } from "./Navigation/Navigation.page";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Landing id="landing" />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
