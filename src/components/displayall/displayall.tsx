import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./displayall.css";

interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}

export default function DisplayAll() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/episode").then((response) => {
      setTotalPages(Math.ceil(response.data.info.count / 6));
      const sortedEpisodes = response.data.results
        .sort(
          (a: Episode, b: Episode) =>
            new Date(a.air_date).getTime() - new Date(b.air_date).getTime()
        )
        .slice((currentPage - 1) * 6, currentPage * 6);

      setEpisodes(sortedEpisodes);
    });
  }, [currentPage]);

  return (
    <div>
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
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`page-item ${index + 1 === currentPage ? "active" : ""}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
