'use client';

import { useState } from 'react';

import SearchExercises from './SearchExercises';

const SearchBar = () => {

    const [exerciseNames, setExerciseNames] = useState('');

    const handleSearch = () => {

    }

  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchExercises
                exerciseName={exerciseNames}
                setExerciseName={setExerciseNames}
            />
        </div>
    </form>
  )
}

export default SearchBar
