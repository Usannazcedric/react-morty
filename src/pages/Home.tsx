import "./Home.css";
import Navbar from "../components/navbar/navbar";
import Display from "../components/display/display";
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <div className="container1">
      <div className="Background">
        <Navbar />
        <div>
          <img className="logotop" src="../images/logo.png"></img>
        </div>
        <div className="episodes">
          <h1>LAST EPISODES</h1>
          <Display />
        </div>
      </div>
      <Footer />
    </div>
  );
}
