import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Display.css";

interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}

export default function Display() {
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
  );
}
