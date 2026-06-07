import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Leaders } from "./components/Leaders";
import { Schedule } from "./components/Schedule";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      className="min-h-screen bg-[#f8fafc]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Leaders />
        <Schedule />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
