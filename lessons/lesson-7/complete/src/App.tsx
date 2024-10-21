import { Carousel, InfoCards, Navbar, Footer } from "./components";

export default function App() {
  return (
    // center contents
    <>
      <Navbar />

      <div className="flex flex-1">
        <Carousel />
      </div>
      <InfoCards />
      <Footer />
    </>
  );
}
