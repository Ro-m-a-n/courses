import { AboutCompany } from "./components/aboutCompany/AboutCompany";
import { Footer } from "./components/footer/footer";
import { Form } from "./components/form/form";
import { NavBar } from "./components/navBar/navBar";
import { Projects } from "./components/projects/projects";
import { WelcomePage } from "./components/welcomePage/welcomePage";
import "./scss/main/main.css";

const App = () => {
  return (
    <>
      <NavBar />
      <WelcomePage />
      <Projects />
      <AboutCompany />
      <Form />
      <Footer />
    </>
  );
};

export default App;
