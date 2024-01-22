import "./Episode.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
}

interface Character {
  id: number;
  name: string;
  image: string;
  gender: string;
}

export default function Episode() {
  const { id } = useParams<{ id: string }>();
  const [episode, setEpisode] = useState<Episode | null>(null);
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/${id}`)
      .then((response) => {
        setEpisode(response.data);

        const characterFetchPromises = response.data.characters
          .slice(0, 5)
          .map((url: string) => axios.get(url));
        return Promise.all(characterFetchPromises);
      })
      .then((characterResponses) => {
        const characterData = characterResponses.map(
          (response) => response.data
        );
        setCharacters(characterData);
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (!episode) {
    return <div>Loading...</div>;
  }

  const somme = episode.characters.length;

  return (
    <div className="container">
      <div className="minicontainer">
        <Navbar />

        <div className="episode">
          <div className="left-section">
            <h1 className="name2">{episode.name}</h1>
            <img
              className="img"
              src="../public/images/episodeimg.png"
              alt="Episode image"
            />
          </div>
          <div className="middle-section">
            <h3 className="number">Episode : {episode.episode}</h3>
            <div className="bluebar"></div>
            <h3>Release date : {episode.air_date}</h3>
            <div className="bluebar"></div>
            <h3>Characters : {somme}</h3>
            <div className="bluebar"></div>
          </div>
          <div className="right-section"></div>
        </div>
        <div>
          <h1 className="name3">Characters in the episode</h1>
          <div className="character-section">
            {characters.map((character) => (
              <div key={character.id} className="character-card">
                <img src={character.image} alt={character.name} />
                <h3>{character.name}</h3>
                <p>Gender : {character.gender}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
