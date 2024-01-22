import "./Episode.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    axios.get(`https://rickandmortyapi.com/api/episode/${id}`)
      .then(response => {
        setEpisode(response.data);

        const characterFetchPromises = response.data.characters.slice(0, 5).map((url: string) => axios.get(url));
        return Promise.all(characterFetchPromises);
      })
      .then(characterResponses => {
        const characterData = characterResponses.map(response => response.data);
        setCharacters(characterData);
      })
      .catch(error => console.log(error));
  }, [id]); 

  if (!episode) {
    return <div>Loading...</div>;
  }

  const somme = episode.characters.length;

  return (
    <div className="container">
      <div className="minicontainer">
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
        <div className="episode">
          <div className="left-section">
            <h1 className="name2">{episode.name}</h1>
            <img
              className="img"
              src="https://media.discordapp.net/attachments/1197901325397143552/1198789590614544416/image.png?ex=65c02ece&is=65adb9ce&hm=47163cd5c8667ce783871956ee92b95f7e29272a53f3c65ebd0dfa44d6ea8486&=&format=webp&quality=lossless&width=1472&height=1084"
              alt=""
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
