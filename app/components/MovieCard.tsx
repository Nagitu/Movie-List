import Link from 'next/link';
import { Movie } from '../types/Movie';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className='h-fit w-[200px]  border-white border hover:scale-110 rounded-lg'>
      <Link href={`/movie/${movie.id}`} className='flex flex-col gap-2 items-center'>
          <img src={imageUrl} alt={movie.title} className='w-[200px] h-[300px] ' />
          <h3>{movie.title}</h3>
      </Link>
    </div>
  );
};

export default MovieCard;
