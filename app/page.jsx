import About from "./components/Sections/About";
import Awards from "./components/Sections/Awards";
import Education from "./components/Sections/Education";
import NavBar from "./components/NavBar";
import Projects from "./components/Sections/Projects";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Sections/Skills";
import Footer from "./components/Footer";
// import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="dark:text-white dark:bg-slate-800 flex-col ">
      <NavBar />
      <div className="flex-1 flex h-full">
        <Sidebar />
        <div className="flex-1 text-stone-900  dark:bg-gray-800 dark:text-zinc-200 pt-6">
          <div className="p-4">
            <About />
            <Education />
            <Awards />
            <Projects />
            <Skills />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
