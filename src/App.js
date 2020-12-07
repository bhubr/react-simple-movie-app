import Header from './components/Header';
import MovieList from './components/MovieList';
import './App.css';

const movies = [
  {
    id: 1,
    title: 'The Invisible Man',
    picture:
      'https://see-mag.fr/wp-content/uploads/2020/06/THE_INVISIBLE_MAN_POSTER_SEE.jpg',
    release: '2020-02-28',
  },
  {
    id: 2,
    title: 'Inception',
    picture:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
    release: '2010-07-08',
  },
];

function App() {
  return (
    <div className="App container">
      <Header />
      <MovieList movies={movies} />
    </div>
  );
}
export default App;
