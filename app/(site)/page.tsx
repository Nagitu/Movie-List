// pages/movies.tsx
'use client'
import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard'; // Pastikan path ini benar
import { Movie } from '../types/Movie'; // Pastikan path ini benar
import { Component as CarouselComponent } from '../components/Carousel'
import Image from 'next/image';

const MoviesPage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [carouselImages, setCarouselImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const apiKey = 'afe0250771f9175ad79267e3d1cbf748';
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        setMovies(data.results);

        // Fetch carousel images (assuming you want to use a subset of popular movies for the carousel)
        const carouselImages = data.results.slice(0, 5).map((movie: Movie) =>
          `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        );
        setCarouselImages(carouselImages);

      } catch (err) {
        setError('Failed to load movies');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className= 'min-h-screen m-auto flex flex-col justify-center items-center p-10 gap-5 '>
      <CarouselComponent images={carouselImages} /> 
      <h1>Popular Movies</h1>
      <div className=' gap-10 flex flex-wrap justify-center items-center'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
