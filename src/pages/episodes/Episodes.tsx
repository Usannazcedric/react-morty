import "./Episodes.css";
import Footer from "../../components/footer/footer.tsx";
import Navbar from "../../components/navbar/navbar.tsx";
import DisplayAll from "../../components/displayall/displayall.tsx";

export default function Episodes() {
  return (
    <div className="container">
      <Navbar />
      <div className="top">
        <h1>ALL EPISODES</h1>
      </div>
      <div className="middle">
        <DisplayAll />
      </div>
      <div className="down"></div>
      <Footer />
    </div>
  );
}
