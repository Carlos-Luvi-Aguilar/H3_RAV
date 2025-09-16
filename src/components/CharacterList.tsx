import React from 'react';
import { Character } from '../types/Character';
import CharacterCard from './CharacterCard';
import './CharacterList.css';

interface CharacterListProps {
  characters: Character[];
  loading: boolean;
}

const CharacterList: React.FC<CharacterListProps> = ({ characters, loading }) => {
  if (loading) {
    return <div className="loading">Cargando personajes</div>;
  }

  if (characters.length === 0) {
    return <div className="no-results">No se encontro personajes</div>;
  }

  return (
    <div className="character-list">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;