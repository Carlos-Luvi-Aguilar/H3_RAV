import React from 'react';
import './SearchBar.css';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  onSearch: () => void;
  loading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
  onSearch,
  loading,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="buscar personajes"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-input"
        disabled={loading}
      />
      <button 
        type="submit" 
        className="search-button"
        disabled={loading}
      >
        {loading ? 'Buscando' : 'Buscar'}
      </button>
    </form>
  );
};

export default SearchBar;