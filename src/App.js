import './App.scss';
import './styles/style.scss';
import DistancePage from './pages/DistancePage';
import GreetingPage from './pages/GreetingPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GreetingPage /> 
        <DistancePage /> 
      </header>
    </div>
  );
}

export default App;
