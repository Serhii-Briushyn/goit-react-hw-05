import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmQ4Y2EyMThhMWFmYTFhYWNhNzJjZTliYmMwMjlmOCIsIm5iZiI6MTcyNzI4NTMwMC4xNTY0MzcsInN1YiI6IjY2ZjQzYmY3Njg2MjhhMmVjMDBkZmI5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qxjaSLMRulN2n_dQHgYjlbUEYFzUOyG1CQfomivoEIw";

const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const fetchTrendingMovies = async (page = 1) => {
  const { data } = await axios.get(
    `trending/movie/day?language=en-US&page=${page}`,
    options
  );
  return data;
};

export const fetchMoviesByQuery = async (query, page = 1) => {
  const { data } = await axios.get(
    `search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`,
    options
  );
  return data;
};

export const fetchMovieDetails = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}?language=en-US`, options);
  return data;
};

export const fetchMovieCast = async (movieId) => {
  const { data } = await axios.get(
    `movie/${movieId}/credits?language=en-US`,
    options
  );
  return data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const { data } = await axios.get(
    `movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );
  return data.results;
};
