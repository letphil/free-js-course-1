import { useNavigate } from "react-router-dom";
import { Navbar, Carousel, InfoCards, Footer } from "../components";

const infoCardsData = [
  {
    image:
      "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
    title: "title1",
    description: "description1",
  },
  {
    image:
      "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
    title: "title2",
    description: "description2",
  },
  {
    image:
      "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
    title: "title3",
    description: "description3",
  },
];

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar
        goToAuth={() => {
          navigate("/auth");
        }}
      />
      <Carousel />
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
      <br />
      <InfoCards infoCardsData={infoCardsData} />
      <br />
      <Footer />
    </div>
  );
}
