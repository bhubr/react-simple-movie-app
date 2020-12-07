import { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import MovieList from './components/MovieList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    const apiUrl =
      'https://my-json-server.typicode.com/bhubr/micro-movie-api/movies';
    axios
      .get(apiUrl)
      .then((res) => res.data)
      .then((movies) => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="App container">
        <Header />
        <MovieList movies={movies} />
      </div>
    );
  }
}
export default App;
