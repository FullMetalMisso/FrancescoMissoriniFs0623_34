
import './App.css';
import AllMovies from './components/AllMovies';
import MyFooter from './components/MyFooter';
import MyGener from './components/MyGener';
import MyNavbar from './components/MyNavbar'

function App() {
  return (
    <div>
     <header>
      <MyNavbar />
      </header>
      <main>
      
      <MyGener />
      <AllMovies />
      </main>
      <MyFooter />
    </div>
  );
}

export default App;
