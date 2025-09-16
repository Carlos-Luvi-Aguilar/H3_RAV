import React, { useState, useEffect, useCallback } from 'react';
import { getCharacters } from './services/api';
import { Character } from './types/Character';
import CharacterList from './components/CharacterList';
import SearchBar from './components/SearchBar';
import './App.css';

const App: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);
  

  const fetchCharacters = useCallback(async (page: number = 1, search: string = '') => {
    setLoading(true);
    try {
      const response = await getCharacters(page, search);
      setCharacters(response.results);
      setHasNextPage(!!response.info.next);
      setCurrentPage(page);
      console.log('🏠 Desde App - Personajes:', response.results);
    } catch (error) {
      console.error(error);
      setCharacters([]);
    } finally {
      setLoading(false);
    }
    
  }, []);

  useEffect(() => {
    fetchCharacters(1, searchTerm);
  }, [fetchCharacters, searchTerm]);

  const handleSearch = () => {
    fetchCharacters(1, searchTerm);
  };

  const handleLoadMore = () => {
    if (hasNextPage) {
      fetchCharacters(currentPage + 1, searchTerm);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Personajes de Rick y Morty</h1>
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onSearch={handleSearch}
          loading={loading}
        />
      </header>
      
      <main className="app-main">
        <CharacterList characters={characters} loading={loading} />
        
        {hasNextPage && !loading && (
          <div className="load-more-container">
            <button onClick={handleLoadMore} className="load-more-button">
              Cargar mas
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;