import { useRouter } from 'next/router';
import useSWR from 'swr';
import MovieDetails from '@/components/MovieDetails';
import Error from 'next/error';
import PageHeader from '@/components/PageHeader';

//https://webprogrammingforappsandservices.sdds.ca/Pages-Routing/dynamic-routes#reading-route-parameters
const Movie = () => {
  const router = useRouter();
  const { title } = router.query;
  const { data, error } = useSWR(`https://ruby-precious-coyote.cyclic.app/api/movies?movies?page=1&perPage=10&title=${title}`);

  if (!data){
    return null;
  }
  if (data.length === 0){
    return <Error statusCode={404} />;
  }
  return (
    <div>
      {data.map((movie)=>(
          <div key={movie._id}>
            <PageHeader text={movie.title}/>
            <MovieDetails movie={movie}/>
          </div>
      ))}
    </div>
  )
};

export default Movie;