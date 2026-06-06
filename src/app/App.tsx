import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

{/* MARKER-MAKE-KIT-INVOKED */}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased" style={{ fontFamily: "var(--font-sans)" }}>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
