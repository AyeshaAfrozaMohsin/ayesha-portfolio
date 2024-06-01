import Header from "../components/Header";
// import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h2>Welcome to my portfolio</h2>
        <p>This is a brief introduction.</p>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
