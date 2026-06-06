import "../styles/fonts.css";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

/* MARKER-MAKE-KIT-INVOKED */

export default function App() {
  return (
    <div
      style={{
        background: "#06080f",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Navigation />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
