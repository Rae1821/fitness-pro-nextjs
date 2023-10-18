'use client'

import { useState, useEffect } from 'react'

const SearchExercises = () => {

    const [searchText, setSearchText] = useState('');
    const [searchTimout, setSearchTimeout] = useState(null);
    const [searchedResults, setSearchedResults] = useState([]);

    const fetchExercises = async () => {
        const response = await fetch('')
    }

  return (
    <section className="search">
        <form>
            <input
                type="text"
                placeholder="Search for exercises"
                value={searchText}
                onChange={handleSearchChange}
                required
                className="search_input"
             />
        </form>
    </section>
  )
}

export default SearchExercises
