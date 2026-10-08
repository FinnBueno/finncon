import type { FC } from "react";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Section } from "./components/Section";
import { textCopy } from "./textCopy";

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
