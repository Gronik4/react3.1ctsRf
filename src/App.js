import './css/App.css';
import './css/stamp.css';
import dataFilm from './components/filmdata';
import FilmList from './components/FilmList';

function App() {
  return (
    <div className="App">
      <FilmList data={dataFilm}/>
    </div>
  );
}

export default App;
