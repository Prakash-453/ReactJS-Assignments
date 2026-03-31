import React, { useState, useEffect, useMemo } from "react";
import Select from "react-select";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setFilteredMovies(data);
        extractGenres(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movie data: ", error);
        setLoading(false);
      });
  }, []);

  const extractGenres = (data) => {
    const allGenres = new Set();
    data.forEach((movie) => movie.genres.forEach((genre) => allGenres.add(genre)));
    setGenres(Array.from(allGenres));
  };

  // Use useMemo to optimize filtering
  const filteredData = useMemo(() => {
    let filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );

    if (selectedGenres.length > 0) {
      const selectedGenreValues = selectedGenres.map((g) => g.value);
      filtered = filtered.filter((movie) =>
        movie.genres.some((genre) => selectedGenreValues.includes(genre))
      );
    }

    return filtered;
  }, [search, selectedGenres, movies]);

  useEffect(() => {
    setFilteredMovies(filteredData);
  }, [filteredData]);

  // Loading state
  if (loading) {
    return <div>Loading movies...</div>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
      <h1 style={{ textAlign: "center" }}>Movie List</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by Title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          fontSize: "16px",
        }}
      />

      {/* Genre Filter */}
      <Select
        isMulti
        options={genres.map((genre) => ({ label: genre, value: genre }))}
        value={selectedGenres}
        onChange={setSelectedGenres}
        placeholder="Select genres..."
        styles={{
          container: (provided) => ({
            ...provided,
            marginBottom: "10px",
          }),
        }}
      />

      {/* Movie Table */}
      <table border="1" width="100%" cellPadding="5" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#ddd" }}>
            <th>Title</th>
            <th>Year</th>
            <th>Cast</th>
            <th>Genres</th>
            <th>Thumbnail</th>
          </tr>
        </thead>
        <tbody>
          {filteredMovies.map((movie) => (
            <tr key={movie.title}>
              <td>{movie.title}</td>
              <td>{movie.year}</td>
              <td>{movie.cast ? movie.cast.join(", ") : "N/A"}</td>
              <td>{movie.genres.join(", ")}</td>
              <td>
                <img 
                  src={"https://via.placeholder.com/50"} 
                  alt={movie.title} 
                  width="50" 
                  height="50" 
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;
