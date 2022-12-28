import { Form } from "./Form/Form.page";
import { Guide } from "./Guide/Guide.page";
import { Landing } from "./Landing/Landing.page";
import { Contact } from "./Contact/Contact.page";
import { Navigation } from "./Navigation/Navigation.page";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Landing id="landing" />
      <Guide />
      <Form id="form" />
      <Contact />
    </div>
  );
}

export default App;
