import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import "./character.css";

interface CharacterDetails {
  id: number;
  name: string;
  image: string;
  gender: string;
  status: string;
  species: string;
  origin: {
    name: string;
    url: string;
  };
}

export default function Character() {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<CharacterDetails | null>(null);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        setCharacter(response.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="top1">
        <Navbar />
        <h1>{character.name}</h1>
        <img src={character.image} alt={character.name} />
        <p>Gender: {character.gender}</p>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Origin: {character.origin?.name || "Unknown"}</p>
      </div>
      <Footer />
    </div>
  );
}
