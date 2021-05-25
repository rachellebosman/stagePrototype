import './App.scss';
import './styles/style.scss';
import './DistancePage'
import DistancePage from './DistancePage';
import GreetingPage from  './GreetingPage'

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
