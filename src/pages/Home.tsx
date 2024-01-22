import { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import axios from "axios";

interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}

export default function Home() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/episode").then((response) => {
      const sortedEpisodes = response.data.results
        .sort(
          (a: Episode, b: Episode) =>
            new Date(b.air_date).getTime() - new Date(a.air_date).getTime()
        )
        .slice(0, 3);

      setEpisodes(sortedEpisodes);
    });
  }, []);

  return (
    <div className="container">
      <div className="Background">
        <div className="nav">
          <Link to="/">
            <a>
              <img
                className="navhome"
                src="https://cdn.discordapp.com/attachments/1197901325397143552/1198680232580894760/Screenshot_2024-01-21_at_18.26_Background_Removed.51.png?ex=65bfc8f5&is=65ad53f5&hm=fc949371ea33be6aa9a92cb9d58cd5d7156a0057d139be8beebfa9bb4d2213ee&"
                alt=""
              />
            </a>
          </Link>
          <Link to="/episodes">
            <a>
              <img
                className="navep"
                src="https://cdn.discordapp.com/attachments/1197901325397143552/1198680395592511598/Screenshot_2024-01-21_at_18.27_Background_Removed.38.png?ex=65bfc91c&is=65ad541c&hm=6450ff02158a5e6852220e09f6143a1d3dc58bc56d47341a9bc709a772a49f37&"
                alt=""
              />
            </a>
          </Link>
        </div>
        <div>
          <img className="logotop" src="../images/logo.png"></img>
        </div>
        <div className="episodes">
          <h1>LASTS EPISODES</h1>
          <div className="list">
            {episodes.map((episode) => (
              <div key={episode.id} className="card">
                <div className="infos">
                  <h2 className="name">{episode.episode}</h2>
                  <h2>{episode.name}</h2>
                  <p>Release : {episode.air_date}</p>
                </div>
                <div className="seemore">
                  <Link to={`/episode/${episode.id}`}>
                    <a>
                      <h2>See more</h2>
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footerbackground">
        <img className="logobottom" src="../images/logo.png"></img>
        <div className="bluebar"></div>
        <div className="footertext">
          <h2>RICK AND MORTY DB | ALL RIGHTS RESERVED</h2>
          <div className="rightlinks">
            <Link to="/">
              <a>
                <h2>HOME</h2>
              </a>
            </Link>
            <Link to="/episodes">
              <a>
                <h2>EPISODES</h2>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
