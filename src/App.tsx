import type { FC } from "react";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Section } from "./components/Section";
import { textCopy } from "./textCopy";
import what from "./assets/images/what.jpg";
import kassaImg from "./assets/images/kassa.jpg";

const App: FC = () => (
  <>
    <header>
      <Navbar />
    </header>
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <Section
        id="about"
        title="Wat is dit?"
        description={textCopy.whatIsThis}
        image={what}
        alt="intro"
      />
      <Section id="dates" title="Wanneer?" description={textCopy.whenIntro} />
      <Section
        id="where"
        title="Waar is het?"
        description={textCopy.whereIntro}
      />
      <Section
        id="transport"
        title="Hoe kom ik er?"
        description={textCopy.gettingThere}
        image={kassaImg}
        alt="Kassa"
      />
      <Section
        id="transport"
        title="Wat kost dat dan?"
        description={textCopy.costs}
      />
      <Section
        id="transport"
        title="Wat is er te doen?"
        description={textCopy.whatToDo}
      />
    </main>
    <footer>
      <Footer />
    </footer>
  </>
);

export default App;
