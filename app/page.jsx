import Header from "./components/Navbar/Header";
import NavBar from "./components/Navbar/NavBar";
import ThemeToggle from "./components/Navbar/ThemeToggle";
// import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="dark:text-white dark:bg-slate-800 h-screen">
      {/* <Header /> */}
      <NavBar />
      <main className="p-4">
        <h2>Ayesha Afroza Mohsin here</h2>
        <p>
          An enthusiastic coder, with a passion for trying new technologies.
        </p>
      </main>
      <ThemeToggle />
      <div>
        <section id="about" className="text-xl ">
          About
        </section>
        <section id="projects">Projects</section>
        <section id="skills">Skills</section>
        <section id="contact">Contact</section>
      </div>
    </div>
  );
}
