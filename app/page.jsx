import About from "./components/About";
import Awards from "./components/Awards";
import Education from "./components/Education";
import NavBar from "./components/Navbar/NavBar";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";
// import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="dark:text-white dark:bg-slate-800 flex-col h-screen">
      <NavBar />
      <div className="flex-1 flex bg-teal-50 h-full">
        <Sidebar />
        <div className="flex-1 text-stone-900 dark:bg-gray-800 dark:text-zinc-200 p-4 py-6">
          <About />
          {/* <Education />
          <Awards />
          <Projects />
          <Skills /> */}
          {/* contact */}
        </div>
      </div>
    </div>
  );
}
