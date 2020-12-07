import './App.css';
import Header from './components/Header';
import Movie from './components/Movie';

const movie = {
  id: 1,
  title: 'The Invisible Man',
  picture:
    'https://see-mag.fr/wp-content/uploads/2020/06/THE_INVISIBLE_MAN_POSTER_SEE.jpg',
  release: '2020-02-28',
};

function App() {
  return (
    <div className="App container">
      <Header />
      <Movie movie={movie} />
    </div>
  );
}

export default App;
