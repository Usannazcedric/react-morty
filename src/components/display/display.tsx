import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./display.css";

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
    <div className="list1">
      {episodes.map((episode) => (
        <div key={episode.id} className="card1">
          <div className="infos1">
            <h2 className="name1">{episode.episode}</h2>
            <h2>{episode.name}</h2>
            <p>Release : {episode.air_date}</p>
          </div>
          <div className="seemore1">
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
