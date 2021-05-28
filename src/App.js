// je importeert 2 keer een style bestand, kan dat anders?
import './App.scss';
import './styles/style.scss';
import MainPage from './pages/MainPage';

function App() {
  return (
    // classNames zijn niet consistent
    <div className="App">
      {/* hebben we het over gehad */}
      <header className="App-header">

        <MainPage />
        {/*  dit soort spaces kunnen afgevangen worden door linting */}


      </header>
    </div>
  );
}

export default App;