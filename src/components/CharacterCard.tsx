import React from 'react';
import { Character } from '../types/Character';
import './CharacterCard.css';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'alive':
        return '#55cc44';
      case 'dead':
        return '#d63d2e';
      default:
        return '#9e9e9e';
    }
  };

  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} className="character-image" />
      <div className="character-info">
        <h3 className="character-name">{character.name}</h3>
        <div className="character-status">
          <span 
            className="status-dot" 
            style={{ backgroundColor: getStatusColor(character.status) }}
          />
          {character.status} - {character.species}
        </div>
        <div className="character-details">
          <p><strong>Genero:</strong> {character.gender}</p>
          <p><strong>Origen:</strong> {character.origin.name}</p>
          <p><strong>Ubicacion:</strong> {character.location.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;