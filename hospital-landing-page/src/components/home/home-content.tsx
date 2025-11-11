import About from "./about";
import Contact from "./contact";
import Hero from "./hero";
import Services from "./services";

const HomeContent = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  );
};

export default HomeContent;
