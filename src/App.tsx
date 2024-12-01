// src/App.tsx
import Header from "./sections/Header/Header";
import Home from "./sections/Home/Home";
import Services from "./sections/Services";
import Education from "./sections/Education/Education";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Services />
      <Education />
      <Footer />
    </>
  );
};

export default App;
